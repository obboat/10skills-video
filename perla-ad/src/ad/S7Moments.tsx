import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Bubbles, GOLD, Line, TextBlock, Water } from "./shared";

const moments = ["At your desk.", "On the pitch.", "Between meetings.", "On the long drive home."];

export const S7Moments: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Water />
      <Bubbles count={26} opacity={0.35} />
      {/* thin gold rule that draws across */}
      <div
        style={{
          position: "absolute",
          top: 600,
          left: 340,
          height: 1.5,
          width: interpolate(frame, [10, 70], [0, 400], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          backgroundColor: GOLD,
          opacity: 0.8,
        }}
      />
      <TextBlock>
        {moments.map((m, i) => (
          <Line key={m} start={30 + i * 55} end={300} size={76} italic={i % 2 === 1}>
            {m}
          </Line>
        ))}
        <Line start={320} end={480} size={92} style={{ marginTop: 50 }}>
          Wherever the day
        </Line>
        <Line start={345} end={480} size={92} italic>
          takes you.
        </Line>
      </TextBlock>
    </AbsoluteFill>
  );
};
