import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  random,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/fonts";

// Local variable fonts (SIL OFL): Cormorant Garamond + Montserrat.
loadFont({ family: "Cormorant", url: staticFile("fonts/Cormorant.ttf"), weight: "300 700" });
loadFont({ family: "Cormorant", url: staticFile("fonts/Cormorant-Italic.ttf"), weight: "300 700", style: "italic" });
loadFont({ family: "Montserrat", url: staticFile("fonts/Montserrat.ttf"), weight: "100 900" });

export const serif = "Cormorant, serif";
export const serifItalic = "Cormorant, serif";
export const sans = "Montserrat, sans-serif";

export const INK = "#05070c";
export const PEARL = "#f3efe6";
export const GOLD = "#c9b48a";
export const ease = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** Text line that rises and fades in at `start`, fades out at `end` (frames). */
export const Line: React.FC<{
  children: React.ReactNode;
  start: number;
  end: number;
  size?: number;
  italic?: boolean;
  font?: "serif" | "sans";
  color?: string;
  tracking?: number;
  weight?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  start,
  end,
  size = 84,
  italic,
  font = "serif",
  color = PEARL,
  tracking = 0,
  weight = 300,
  style,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [start, start + 30, end - 24, end],
    [0, 1, 1, 0],
    { ...clamp, easing: ease },
  );
  return (
    <div
      style={{
        opacity,
        translate: `0px ${interpolate(frame, [start, start + 45], [26, 0], { ...clamp, easing: ease })}px`,
        filter: `blur(${interpolate(frame, [start, start + 30], [8, 0], clamp)}px)`,
        fontFamily: font === "sans" ? sans : italic ? serifItalic : serif,
        fontStyle: italic ? "italic" : "normal",
        fontSize: size,
        fontWeight: weight,
        letterSpacing: tracking,
        color,
        lineHeight: 1.12,
        textAlign: "center",
        textShadow: "0 2px 30px rgba(0,0,0,0.55)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Centered text column within a safe area. */
export const TextBlock: React.FC<{
  children: React.ReactNode;
  top?: number;
  bottom?: number;
}> = ({ children, top, bottom }) => (
  <AbsoluteFill
    style={{
      padding: "0 100px",
      justifyContent: top !== undefined ? "flex-start" : bottom !== undefined ? "flex-end" : "center",
      paddingTop: top,
      paddingBottom: bottom,
      alignItems: "center",
      gap: 18,
    }}
  >
    {children}
  </AbsoluteFill>
);

/** The graded hero photo with a slow camera move toward a focal point (px in 1080x1920 frame). */
export const Shot: React.FC<{
  fx: number;
  fy: number;
  fromScale: number;
  toScale: number;
  drift?: [number, number];
  darken?: number;
  /** where on screen the focal point should sit (default: centre) */
  at?: [number, number];
}> = ({ fx, fy, fromScale, toScale, drift = [0, 0], darken = 0.25, at = [540, 960] }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.33, 0, 0.67, 1),
  });
  const sc = fromScale + (toScale - fromScale) * p;
  // keep the frame covered: never pan past the photo's edge when zoomed in
  const fit = (v: number, size: number, k: number) =>
    k >= 1 ? Math.min(0, Math.max(size - size * k, v)) : v;
  return (
    <AbsoluteFill style={{ backgroundColor: INK, overflow: "hidden" }}>
      <Img
        src={staticFile("hero.jpg")}
        style={{
          width: 1080,
          height: 1920,
          objectFit: "cover",
          transformOrigin: "0px 0px",
          scale: String(sc),
          translate: `${fit(at[0] - fx * sc + drift[0] * p, 1080, sc)}px ${fit(at[1] - fy * sc + drift[1] * p, 1920, sc)}px`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 45%, rgba(5,7,12,${darken * 0.4}) 0%, rgba(5,7,12,${Math.min(1, darken + 0.45)}) 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};

/** Soft rising bubbles, deterministic. */
export const Bubbles: React.FC<{ count?: number; opacity?: number }> = ({
  count = 40,
  opacity = 0.6,
}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ opacity }}>
      {new Array(count).fill(0).map((_, i) => {
        const x = random(`x${i}`) * 1080;
        const r = 4 + random(`r${i}`) * 22;
        const speed = 1.2 + random(`s${i}`) * 2.6;
        const y = 2000 - ((random(`o${i}`) * 2100 + frame * speed) % 2150);
        const wobble = Math.sin(frame / (18 + random(`w${i}`) * 20) + i) * 14;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x + wobble,
              top: y,
              width: r * 2,
              height: r * 2,
              borderRadius: "50%",
              border: "1.5px solid rgba(220,235,255,0.55)",
              background:
                "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 35%, rgba(160,200,255,0.06) 100%)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

/** Deep water backdrop with slow drifting caustic light. */
export const Water: React.FC = () => {
  const frame = useCurrentFrame();
  const a = frame / 90;
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 80% 55% at ${50 + Math.sin(a) * 12}% ${30 + Math.cos(a * 0.7) * 8}%, rgba(70,110,170,0.35) 0%, rgba(10,18,32,0) 70%),
          radial-gradient(ellipse 60% 40% at ${40 + Math.cos(a * 0.8) * 15}% ${75 + Math.sin(a * 0.5) * 6}%, rgba(40,70,120,0.25) 0%, rgba(10,18,32,0) 70%),
          linear-gradient(180deg, #0b1424 0%, #05070c 100%)`,
      }}
    />
  );
};

/** Film grain + letterbox vignette to unify the look. */
export const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='${frame % 8}'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />
      <AbsoluteFill
        style={{
          boxShadow: "inset 0 0 260px rgba(0,0,0,0.75)",
        }}
      />
    </AbsoluteFill>
  );
};
