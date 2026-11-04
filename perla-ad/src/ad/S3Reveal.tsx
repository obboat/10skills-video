import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Line, Shot, TextBlock, GOLD } from "./shared";

export const S3Reveal: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [0, 90], [0, 1], { extrapolateRight: "clamp" }),
          filter: `brightness(${interpolate(frame, [0, 120], [0.3, 1], { extrapolateRight: "clamp" })})`,
        }}
      >
        <Shot fx={650} fy={960} fromScale={1.12} toScale={1.0} at={[540, 900]} darken={0.12} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{ background: "linear-gradient(180deg, rgba(5,7,12,0) 55%, rgba(5,7,12,0.92) 100%)" }}
      />
      <TextBlock bottom={190}>
        <Line start={150} end={450} size={30} font="sans" tracking={12} color={GOLD}>
          INTRODUCING CALM
        </Line>
        <Line start={175} end={450} size={96}>Clarity,</Line>
        <Line start={200} end={450} size={96} italic>held in your hand.</Line>
      </TextBlock>
    </AbsoluteFill>
  );
};
