import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEAT, C, Dots, Slam, Small, usePop, usePulse } from "./kit";

export const G8Pearl: React.FC = () => {
  const frame = useCurrentFrame();
  const p = usePop(BEAT, 8);
  const pulse = usePulse();
  return (
    <AbsoluteFill>
      <Dots bg={C.ink} dot="rgba(200,255,61,0.25)" />
      <AbsoluteFill style={{ alignItems: "center", paddingTop: 200, gap: 10 }}>
        <Slam at={0} size={70} color={C.lime} stroke={C.ink}>fun fact</Slam>
        <Slam at={BEAT * 2} size={110} color={C.white} rotate={-2}>"perla"</Slam>
        <Slam at={BEAT * 3} size={80} color={C.white} rotate={2}>= pearl</Slam>
        {frame >= BEAT * 4 && <Small color={C.white} style={{ marginTop: 10 }}>in Spanish & Italian</Small>}
      </AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: 540 - 190,
          top: 1050,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle at 32% 28%, #fff 0%, #f6f1ff 20%, #dcd6f0 50%, #a7a3c4 85%)",
          border: `8px solid ${C.ink}`,
          boxShadow: `0 0 ${60 + pulse * 60}px rgba(255,122,217,0.8)`,
          scale: String(p * (1 + pulse * 0.05)),
          rotate: `${frame}deg`,
        }}
      />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 220 }}>
        <Slam at={BEAT * 7} size={96} color={C.pink} rotate={-3}>rare. like you.</Slam>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
