import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEAT, C, Center, Rays, Slam } from "./kit";

// "CHALE. THE SUN NO DEY JOKE." Sun spins, words land on the beat.
export const G1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Rays a={C.orange} b="#FF7A3D" speed={0.6} />
      <svg width={420} height={420} viewBox="0 0 100 100" style={{ position: "absolute", left: 330, top: 220, rotate: `${frame * 1.5}deg` }}>
        {new Array(12).fill(0).map((_, i) => (
          <rect key={i} x={47} y={2} width={6} height={18} rx={3} fill={C.lime} stroke={C.ink} strokeWidth={2} transform={`rotate(${i * 30} 50 50)`} />
        ))}
        <circle cx={50} cy={50} r={24} fill={C.lime} stroke={C.ink} strokeWidth={3} />
      </svg>
      <Center gap={0} style={{ paddingTop: 380 }}>
        <Slam at={0} size={190} rotate={-4}>Chale.</Slam>
        <Slam at={BEAT * 2} size={110} color={C.lime}>The sun</Slam>
        <Slam at={BEAT * 3} size={110} color={C.lime}>no dey</Slam>
        <Slam at={BEAT * 4} size={150} rotate={3}>joke</Slam>
      </Center>
    </AbsoluteFill>
  );
};
