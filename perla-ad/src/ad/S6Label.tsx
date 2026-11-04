import { AbsoluteFill } from "remotion";
import { GOLD, Line, Shot, TextBlock } from "./shared";

export const S6Label: React.FC = () => (
  <AbsoluteFill>
    <Shot fx={663} fy={796} fromScale={1.35} toScale={1.5} at={[540, 760]} darken={0.3} />
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
