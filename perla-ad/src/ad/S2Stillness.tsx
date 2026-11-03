import { AbsoluteFill } from "remotion";
import { Bubbles, Line, TextBlock, Water, GOLD } from "./shared";

export const S2Stillness: React.FC = () => (
  <AbsoluteFill>
    <Water />
    <Bubbles count={34} opacity={0.5} />
    <TextBlock>
      <Line start={20} end={175} size={88}>Before the rush</Line>
      <Line start={40} end={175} size={88}>of the day,</Line>
      <Line start={185} end={360} size={88} italic>there is a moment</Line>
      <Line start={205} end={360} size={88} italic>of stillness.</Line>
      <Line start={240} end={360} size={30} font="sans" tracking={10} color={GOLD} style={{ marginTop: 40 }}>
        BREATHE
      </Line>
    </TextBlock>
  </AbsoluteFill>
);
