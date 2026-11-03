import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { INK, Line, TextBlock } from "./shared";

// A luminous pearl forms from light.
export const S8Pearl: React.FC = () => {
  const frame = useCurrentFrame();
  const size = interpolate(frame, [0, 120], [40, 360], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const glow = 0.5 + Math.sin(frame / 18) * 0.12;
  return (
    <AbsoluteFill style={{ backgroundColor: INK }}>
      <div
        style={{
          position: "absolute",
          left: 540 - size / 2,
          top: 700 - size / 2,
          width: size,
          height: size,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 34% 30%, #ffffff 0%, #f4efe7 18%, #d9d4cc 45%, #9d9fa8 78%, #5d6070 100%)",
          boxShadow: `0 0 ${120 * glow}px rgba(235,228,214,${glow}), inset -20px -30px 60px rgba(40,45,70,0.5)`,
          opacity: interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" }),
          rotate: `${frame * 0.15}deg`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 540 - size * 0.7,
          top: 700 + size * 0.62,
          width: size * 1.4,
          height: size * 0.16,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(235,228,214,0.25), rgba(0,0,0,0) 70%)",
        }}
      />
      <TextBlock top={1130}>
        <Line start={110} end={360} size={92}>Rare things are simple.</Line>
        <Line start={170} end={360} size={92} italic>Simple things are rare.</Line>
      </TextBlock>
    </AbsoluteFill>
  );
};
