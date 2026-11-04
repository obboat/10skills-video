import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BEAT, body, BottleCard, C, display, Rays, Slam, Sparkle, Sticker, usePop } from "./kit";

export const G10End: React.FC = () => {
  const frame = useCurrentFrame();
  const logo = usePop(BEAT * 2, 9);
  return (
    <AbsoluteFill>
      <Rays a={C.blue} b="#3A63FF" speed={0.3} />
      <BottleCard at={0} w={520} x={540} y={760} rotate={-4} />
      <Sparkle at={BEAT} x={170} y={420} size={110} color={C.lime} />
      <Sparkle at={BEAT * 2} x={920} y={1080} size={90} color={C.orange} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 250, gap: 22 }}>
        <div
          style={{
            fontFamily: display,
            fontWeight: 900,
            fontSize: 170,
            color: C.white,
            WebkitTextStroke: `7px ${C.ink}`,
            paintOrder: "stroke fill",
            textShadow: `10px 10px 0 ${C.ink}`,
            letterSpacing: 6,
            scale: String(logo),
          }}
        >
          PERLA
        </div>
        <div style={{ fontFamily: body, fontWeight: 700, fontSize: 40, letterSpacing: 12, color: C.lime, opacity: interpolate(frame, [BEAT * 3, BEAT * 4], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          MINERAL WATER
        </div>
        <Slam at={BEAT * 5} size={78} color={C.lime} rotate={-2} style={{ marginTop: 20 }}>
          chale, stay hydrated
        </Slam>
      </AbsoluteFill>
      <Sticker at={BEAT * 7} x={810} y={330} bg={C.orange} color={C.white} rotate={9} size={40}>grab one ✦</Sticker>
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 100 }}>
        <div style={{ fontFamily: body, fontSize: 24, color: "rgba(255,255,255,0.75)", opacity: interpolate(frame, [BEAT * 8, BEAT * 9], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          Spec advertisement · Not affiliated with or endorsed by Perla
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
