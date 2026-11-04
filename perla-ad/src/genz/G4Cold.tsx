import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEAT, BottleCard, C, Dots, Slam } from "./kit";

const Flake: React.FC<{ x: number; y: number; s: number }> = ({ x, y, s }) => {
  const frame = useCurrentFrame();
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" style={{ position: "absolute", left: x, top: y + Math.sin(frame / 10 + x) * 20, rotate: `${frame * 1.2}deg` }}>
      {[0, 60, 120].map((r) => (
        <line key={r} x1={50} y1={8} x2={50} y2={92} stroke={C.white} strokeWidth={8} strokeLinecap="round" transform={`rotate(${r} 50 50)`} />
      ))}
    </svg>
  );
};

export const G4Cold: React.FC = () => (
  <AbsoluteFill>
    <Dots bg={C.blue} dot="rgba(255,255,255,0.18)" />
    <Flake x={90} y={260} s={120} />
    <Flake x={860} y={420} s={90} />
    <Flake x={120} y={1500} s={80} />
    <Flake x={880} y={1620} s={130} />
    <BottleCard at={0} w={560} x={540} y={1120} rotate={5} zoom={1.25} focus={[45, 70]} radius={280} />
    <AbsoluteFill style={{ alignItems: "center", paddingTop: 180, gap: 0 }}>
      <Slam at={0} size={120} color={C.lime} rotate={-3}>no cap,</Slam>
      <Slam at={BEAT * 2} size={140} color={C.white} rotate={2}>e cold.</Slam>
    </AbsoluteFill>
  </AbsoluteFill>
);
