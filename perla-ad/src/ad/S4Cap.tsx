import { AbsoluteFill } from "remotion";
import { Line, Shot, TextBlock } from "./shared";

export const S4Cap: React.FC = () => (
  <AbsoluteFill>
    <Shot fx={812} fy={470} fromScale={1.35} toScale={1.55} at={[560, 640]} darken={0.25} />
    <AbsoluteFill
      style={{ background: "linear-gradient(0deg, rgba(5,7,12,0.85) 0%, rgba(5,7,12,0) 45%)" }}
    />
    <TextBlock bottom={220}>
      <Line start={40} end={390} size={90}>Sealed for the moment</Line>
      <Line start={70} end={390} size={90} italic>you twist it open.</Line>
    </TextBlock>
  </AbsoluteFill>
);
