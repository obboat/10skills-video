import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BEAT, C, display, Dots, Slam, usePop } from "./kit";

const items = ["Lecture hall", "Match day", "Trotro ride", "Night out"];

const Row: React.FC<{ label: string; at: number }> = ({ label, at }) => {
  const frame = useCurrentFrame();
  const p = usePop(at, 10);
  const tick = interpolate(frame - at - 6, [0, 8], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (frame < at) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 34,
        backgroundColor: C.white,
        border: `6px solid ${C.ink}`,
        boxShadow: `10px 10px 0 ${C.ink}`,
        borderRadius: 34,
        padding: "26px 40px",
        width: 820,
        translate: `${interpolate(p, [0, 1], [-1200, 0])}px 0px`,
      }}
    >
      <svg width={84} height={84} viewBox="0 0 60 60">
        <rect x={3} y={3} width={54} height={54} rx={14} fill={C.lime} stroke={C.ink} strokeWidth={5} />
        <path d="M15 31 L26 42 L46 18" fill="none" stroke={C.ink} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={60} strokeDashoffset={tick} />
      </svg>
      <div style={{ fontFamily: display, fontWeight: 800, fontSize: 60, color: C.ink }}>{label}</div>
    </div>
  );
};

export const G5Check: React.FC = () => (
  <AbsoluteFill>
    <Dots bg={C.pink} />
    <AbsoluteFill style={{ alignItems: "center", paddingTop: 200, gap: 40 }}>
      <Slam at={0} size={100} color={C.white} rotate={-3} style={{ marginBottom: 40 }}>hydration check</Slam>
      {items.map((it, i) => (
        <Row key={it} label={it} at={BEAT * (2 + i * 2)} />
      ))}
    </AbsoluteFill>
  </AbsoluteFill>
);
