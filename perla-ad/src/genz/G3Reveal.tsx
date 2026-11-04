import { AbsoluteFill } from "remotion";
import { BEAT, BottleCard, C, Rays, Slam, Sparkle, Sticker } from "./kit";

export const G3Reveal: React.FC = () => (
  <AbsoluteFill>
    <Rays a={C.sky} b="#5AD3FF" speed={0.5} />
    <AbsoluteFill style={{ alignItems: "center", paddingTop: 130 }}>
      <Slam at={0} size={92} color={C.white}>enter:</Slam>
    </AbsoluteFill>
    <BottleCard at={4} w={660} x={540} y={1060} rotate={-4} />
    <Sticker at={BEAT * 3} x={260} y={560} bg={C.orange} color={C.white} rotate={-10}>PERLA</Sticker>
    <Sticker at={BEAT * 4} x={830} y={1500} bg={C.lime} rotate={8}>mineral water</Sticker>
    <Sticker at={BEAT * 5} x={250} y={1650} bg={C.white} rotate={-6} size={40}>main character</Sticker>
    <Sparkle at={BEAT * 3} x={900} y={420} size={110} />
    <Sparkle at={BEAT * 4} x={140} y={1180} size={80} color={C.lime} />
    <Sparkle at={BEAT * 6} x={940} y={1000} size={70} color={C.orange} />
  </AbsoluteFill>
);
