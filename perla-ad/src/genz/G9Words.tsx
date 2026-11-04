import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEAT, BottleCard, C, Slam } from "./kit";

const words: [string, string, string][] = [
  ["sip.", C.orange, C.white],
  ["chill.", C.blue, C.lime],
  ["vibe.", C.lime, C.ink],
  ["repeat.", C.pink, C.white],
];

export const G9Words: React.FC = () => {
  const frame = useCurrentFrame();
  const i = Math.min(words.length - 1, Math.floor(frame / (BEAT * 3)));
  const [w, bg, fg] = words[i];
  return (
    <AbsoluteFill style={{ backgroundColor: bg }}>
      <BottleCard key={i} at={i * BEAT * 3} w={380} x={i % 2 ? 300 : 780} y={1380} rotate={i % 2 ? -8 : 8} bounce />
      <AbsoluteFill style={{ alignItems: "center", paddingTop: 420 }}>
        <Slam key={w} at={i * BEAT * 3} size={190} color={fg} stroke={C.ink} rotate={i % 2 ? 4 : -4}>
          {w}
        </Slam>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
