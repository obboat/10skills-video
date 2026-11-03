import { AbsoluteFill } from "remotion";
import { GOLD, Line, Shot, TextBlock } from "./shared";

export const S6Label: React.FC = () => (
  <AbsoluteFill>
    <Shot fx={410} fy={700} fromScale={1.8} toScale={2.05} at={[540, 760]} drift={[-40, 0]} darken={0.35} />
    <AbsoluteFill
      style={{ background: "linear-gradient(0deg, rgba(5,7,12,0.92) 0%, rgba(5,7,12,0.2) 55%, rgba(5,7,12,0) 100%)" }}
    />
    <TextBlock bottom={200}>
      <Line start={40} end={215} size={30} font="sans" tracking={12} color={GOLD}>
        PER·LA
      </Line>
      <Line start={60} end={215} size={88} italic>the word for pearl</Line>
      <Line start={80} end={215} size={44} font="sans">in Spanish and Italian.</Line>
      <Line start={235} end={450} size={84}>The finest things</Line>
      <Line start={260} end={450} size={84} italic>are often the simplest.</Line>
    </TextBlock>
  </AbsoluteFill>
);
