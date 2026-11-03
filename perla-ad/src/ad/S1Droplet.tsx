import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { INK, Line, TextBlock } from "./shared";

// A single drop falls into still water. Rings spread.
export const S1Droplet: React.FC = () => {
  const frame = useCurrentFrame();
  const impact = 46;
  const dropY = interpolate(frame, [0, impact], [-80, 1080], {
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.quad),
  });
  return (
    <AbsoluteFill style={{ backgroundColor: INK }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 70% 30% at 50% 57%, rgba(60,95,150,0.28) 0%, rgba(5,7,12,0) 70%)",
          opacity: interpolate(frame, [impact - 10, impact + 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      {frame < impact && (
        <div
          style={{
            position: "absolute",
            left: 540 - 9,
            top: dropY,
            width: 18,
            height: 28,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: "radial-gradient(circle at 35% 35%, #ffffff, #9fc3ff 60%, #3a5f9c)",
            boxShadow: "0 0 24px rgba(170,205,255,0.8)",
          }}
        />
      )}
      {[0, 1, 2, 3, 4].map((i) => {
        const t = frame - impact - i * 14;
        if (t < 0) return null;
        const w = interpolate(t, [0, 200], [10, 1500], { easing: Easing.out(Easing.cubic) });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 540 - w / 2,
              top: 1094 - w * 0.09,
              width: w,
              height: w * 0.18,
              borderRadius: "50%",
              border: "2px solid rgba(200,220,255,0.7)",
              opacity: interpolate(t, [0, 20, 200], [0, 0.9, 0], { extrapolateRight: "clamp" }),
            }}
          />
        );
      })}
      <TextBlock top={520}>
        <Line start={95} end={330} size={92}>Some things</Line>
        <Line start={125} end={330} size={92} italic>are worth slowing</Line>
        <Line start={145} end={330} size={92} italic>down for.</Line>
      </TextBlock>
    </AbsoluteFill>
  );
};
