import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GOLD, Line, PEARL, sans, serif, Shot } from "./shared";

export const S9End: React.FC = () => {
  const frame = useCurrentFrame();
  const c = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [0, 60], [0, 1], c),
          maskImage: "radial-gradient(ellipse 42% 34% at 50% 36%, #000 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 42% 34% at 50% 36%, #000 55%, transparent 100%)",
        }}
      >
        <Shot fx={650} fy={960} fromScale={0.66} toScale={0.7} at={[540, 720]} darken={0.15} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 35%, rgba(5,7,12,0) 30%, rgba(5,7,12,1) 75%)",
        }}
      />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 230, gap: 20 }}>
        <div
          style={{
            fontFamily: serif,
            fontWeight: 400,
            fontSize: 170,
            letterSpacing: interpolate(frame, [60, 240], [10, 34], c),
            color: PEARL,
            opacity: interpolate(frame, [60, 110], [0, 1], c),
            paddingLeft: 34,
          }}
        >
          PERLA
        </div>
        <div
          style={{
            width: interpolate(frame, [100, 170], [0, 360], c),
            height: 1.5,
            backgroundColor: GOLD,
          }}
        />
        <div
          style={{
            fontFamily: sans,
            fontSize: 34,
            letterSpacing: 14,
            color: GOLD,
            opacity: interpolate(frame, [120, 160], [0, 1], c),
          }}
        >
          MINERAL WATER
        </div>
        <Line start={190} end={560} size={84} italic style={{ marginTop: 40 }}>
          Pour something pure.
        </Line>
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 100 }}>
        <div
          style={{
            fontFamily: sans,
            fontSize: 22,
            letterSpacing: 2,
            color: "rgba(243,239,230,0.55)",
            opacity: interpolate(frame, [260, 300], [0, 1], c),
          }}
        >
          Spec advertisement · Not affiliated with or endorsed by Perla
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
