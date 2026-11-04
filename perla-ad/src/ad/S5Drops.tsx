import { AbsoluteFill } from "remotion";
import { Line, Shot, TextBlock } from "./shared";

export const S5Drops: React.FC = () => (
  <AbsoluteFill>
    <Shot fx={474} fy={1330} fromScale={1.42} toScale={1.3} at={[540, 1600]} drift={[0, -30]} darken={0.2} />
    <AbsoluteFill
      style={{ background: "linear-gradient(180deg, rgba(5,7,12,0.85) 0%, rgba(5,7,12,0) 45%)" }}
    />
    <TextBlock top={230}>
      <Line start={30} end={420} size={104}>Cool.</Line>
      <Line start={75} end={420} size={104}>Clear.</Line>
      <Line start={130} end={420} size={84} italic>Quietly refreshing.</Line>
    </TextBlock>
  </AbsoluteFill>
);
