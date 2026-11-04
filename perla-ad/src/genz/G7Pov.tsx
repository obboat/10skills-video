import { AbsoluteFill } from "remotion";
import { BEAT, BottleCard, C, Rays, Slam, Sparkle, Sticker } from "./kit";

export const G7Pov: React.FC = () => (
  <AbsoluteFill>
    <Rays a={C.lime} b="#D9FF70" speed={-0.5} />
    <AbsoluteFill style={{ alignItems: "center", paddingTop: 170, gap: 6 }}>
      <Slam at={0} size={80} color={C.white}>POV:</Slam>
      <Slam at={BEAT} size={80} color={C.blue}>you finally</Slam>
      <Slam at={BEAT * 2} size={80} color={C.blue}>drank water</Slam>
    </AbsoluteFill>
    <BottleCard at={BEAT * 3} w={540} x={540} y={1260} rotate={-3} />
    <Sticker at={BEAT * 5} x={800} y={880} bg={C.orange} color={C.white} rotate={10}>glowing ✦</Sticker>
    <Sticker at={BEAT * 7} x={290} y={1720} bg={C.white} rotate={-8}>skin? clear.</Sticker>
    <Sparkle at={BEAT * 5} x={170} y={950} size={100} />
    <Sparkle at={BEAT * 6} x={930} y={1400} size={90} color={C.pink} />
  </AbsoluteFill>
);
