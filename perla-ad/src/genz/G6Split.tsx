import { AbsoluteFill } from "remotion";
import { BEAT, BottleCard, C, Marquee } from "./kit";

export const G6Split: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.orange }}>
    <BottleCard at={0} w={420} x={290} y={620} rotate={-6} zoom={1.7} focus={[75, 12]} radius={40} />
    <BottleCard at={BEAT} w={420} x={790} y={760} rotate={5} zoom={1.6} focus={[62, 38]} radius={40} />
    <BottleCard at={BEAT * 2} w={420} x={420} y={1360} rotate={3} zoom={1.5} focus={[35, 85]} radius={40} />
    <Marquee text="STAY HYDRATED" y={150} />
    <Marquee text="SIP SIP HOORAY" y={1720} bg={C.lime} color={C.ink} rotate={4} dir={-1} />
  </AbsoluteFill>
);
