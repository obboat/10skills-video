import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/fonts";

loadFont({ family: "Unbounded", url: staticFile("fonts/Unbounded.ttf"), weight: "200 900" });
loadFont({ family: "SpaceGrotesk", url: staticFile("fonts/SpaceGrotesk.ttf"), weight: "300 700" });

export const display = "Unbounded, sans-serif";
export const body = "SpaceGrotesk, sans-serif";

export const C = {
  sky: "#38C6FF",
  blue: "#1F4BFF",
  orange: "#FF5B1F",
  lime: "#C8FF3D",
  white: "#FFFFFF",
  ink: "#0D0B2B",
  pink: "#FF7AD9",
};

/** 112.5 BPM at 30 fps: exactly 16 frames per beat. */
export const BEAT = 16;
const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** 1 on each beat, decaying to 0. */
export const usePulse = (offset = 0) => {
  const f = useCurrentFrame() - offset;
  const phase = ((f % BEAT) + BEAT) % BEAT;
  return interpolate(phase, [0, 6], [1, 0], cl);
};

export const usePop = (at: number, damping = 9) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - at, fps, config: { damping, stiffness: 180, mass: 0.6 } });
};

/** Big chunky word that slams in at `at`. */
export const Slam: React.FC<{
  children: React.ReactNode;
  at: number;
  until?: number;
  size?: number;
  color?: string;
  stroke?: string;
  rotate?: number;
  style?: React.CSSProperties;
}> = ({ children, at, until = 99999, size = 150, color = C.white, stroke = C.ink, rotate = 0, style }) => {
  const frame = useCurrentFrame();
  const p = usePop(at, 10);
  if (frame < at || frame >= until) return null;
  return (
    <div
      style={{
        fontFamily: display,
        fontWeight: 900,
        fontSize: size,
        lineHeight: 0.95,
        color,
        textAlign: "center",
        textTransform: "uppercase",
        WebkitTextStroke: `${Math.round(size / 28)}px ${stroke}`,
        paintOrder: "stroke fill",
        textShadow: `${size / 18}px ${size / 18}px 0 ${stroke}`,
        scale: String(interpolate(p, [0, 1], [1.8, 1])),
        rotate: `${interpolate(p, [0, 1], [rotate * 3, rotate])}deg`,
        opacity: interpolate(p, [0, 0.2], [0, 1], cl),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Pill sticker that pops in. */
export const Sticker: React.FC<{
  children: React.ReactNode;
  at: number;
  x: number;
  y: number;
  bg?: string;
  color?: string;
  rotate?: number;
  size?: number;
}> = ({ children, at, x, y, bg = C.lime, color = C.ink, rotate = -6, size = 46 }) => {
  const frame = useCurrentFrame();
  const p = usePop(at, 8);
  const wiggle = Math.sin((frame - at) / 9) * 2.5;
  if (frame < at) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        translate: "-50% -50%",
        padding: `${size * 0.35}px ${size * 0.7}px`,
        borderRadius: 999,
        backgroundColor: bg,
        color,
        border: `5px solid ${C.ink}`,
        boxShadow: `8px 8px 0 ${C.ink}`,
        fontFamily: display,
        fontWeight: 800,
        fontSize: size,
        whiteSpace: "nowrap",
        scale: String(p),
        rotate: `${rotate + wiggle}deg`,
      }}
    >
      {children}
    </div>
  );
};

/** The Perla bottle image in a chunky rounded card. */
export const BottleCard: React.FC<{
  at?: number;
  w?: number;
  x?: number;
  y?: number;
  rotate?: number;
  zoom?: number;
  focus?: [number, number];
  radius?: number;
  bounce?: boolean;
}> = ({ at = 0, w = 720, x = 540, y = 960, rotate = 0, zoom = 1, focus = [50, 50], radius = 60, bounce = true }) => {
  const frame = useCurrentFrame();
  const p = usePop(at, 11);
  const pulse = usePulse(at);
  const h = w * (501 / 399);
  if (frame < at) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: x - w / 2,
        top: y - h / 2,
        width: w,
        height: h,
        borderRadius: radius,
        overflow: "hidden",
        border: `8px solid ${C.ink}`,
        boxShadow: `18px 18px 0 ${C.ink}`,
        translate: `0px ${interpolate(p, [0, 1], [1400, 0])}px`,
        rotate: `${rotate + interpolate(p, [0, 1], [-20, 0])}deg`,
        scale: String(1 + (bounce ? pulse * 0.035 : 0)),
        backgroundColor: C.sky,
      }}
    >
      <Img
        src={staticFile("bottle-card.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: String(zoom),
          transformOrigin: `${focus[0]}% ${focus[1]}%`,
        }}
      />
    </div>
  );
};

/** Rotating sunburst background. */
export const Rays: React.FC<{ a: string; b: string; speed?: number }> = ({ a, b, speed = 0.4 }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: a, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: -900,
          top: -500,
          width: 2880,
          height: 2920,
          background: `repeating-conic-gradient(from 0deg at 50% 50%, ${a} 0deg 10deg, ${b} 10deg 20deg)`,
          rotate: `${frame * speed}deg`,
        }}
      />
    </AbsoluteFill>
  );
};

/** Dotted grid background. */
export const Dots: React.FC<{ bg: string; dot?: string }> = ({ bg, dot = "rgba(13,11,43,0.18)" }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        backgroundImage: `radial-gradient(${dot} 4px, transparent 4.5px)`,
        backgroundSize: "48px 48px",
        backgroundPosition: `${frame * 0.8}px ${frame * 0.8}px`,
      }}
    />
  );
};

/** Scrolling ticker band. */
export const Marquee: React.FC<{ text: string; y: number; bg?: string; color?: string; rotate?: number; dir?: 1 | -1 }> = ({
  text,
  y,
  bg = C.ink,
  color = C.lime,
  rotate = -4,
  dir = 1,
}) => {
  const frame = useCurrentFrame();
  const unit = `${text} ✦ `;
  return (
    <div
      style={{
        position: "absolute",
        left: -200,
        top: y,
        width: 1480,
        padding: "18px 0",
        backgroundColor: bg,
        rotate: `${rotate}deg`,
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: `5px solid ${C.ink}`,
        borderBottom: `5px solid ${C.ink}`,
      }}
    >
      <div
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: 54,
          color,
          translate: `${-((frame * 6 * dir) % 900) - 900}px 0px`,
        }}
      >
        {unit.repeat(12)}
      </div>
    </div>
  );
};

/** Four-point sparkle. */
export const Sparkle: React.FC<{ x: number; y: number; size?: number; color?: string; at?: number }> = ({
  x,
  y,
  size = 80,
  color = C.white,
  at = 0,
}) => {
  const frame = useCurrentFrame();
  const p = usePop(at, 7);
  if (frame < at) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        left: x - size / 2,
        top: y - size / 2,
        scale: String(p * (0.85 + Math.sin(frame / 6 + x) * 0.15)),
        rotate: `${frame * 2}deg`,
      }}
    >
      <path d="M50 0 C55 38 62 45 100 50 C62 55 55 62 50 100 C45 62 38 55 0 50 C38 45 45 38 50 0Z" fill={color} stroke={C.ink} strokeWidth={5} />
    </svg>
  );
};

export const Small: React.FC<{ children: React.ReactNode; color?: string; style?: React.CSSProperties }> = ({
  children,
  color = C.ink,
  style,
}) => (
  <div style={{ fontFamily: body, fontWeight: 700, fontSize: 44, color, textAlign: "center", ...style }}>{children}</div>
);

export const Center: React.FC<{ children: React.ReactNode; gap?: number; style?: React.CSSProperties }> = ({
  children,
  gap = 10,
  style,
}) => (
  <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap, padding: "0 80px", ...style }}>
    {children}
  </AbsoluteFill>
);
