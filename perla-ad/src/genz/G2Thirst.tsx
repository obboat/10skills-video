import { AbsoluteFill, useCurrentFrame } from "remotion";
import { BEAT, C, Center, Dots, Slam, Small } from "./kit";

export const G2Thirst: React.FC = () => {
  const frame = useCurrentFrame();
  const shake = frame >= BEAT * 4 ? Math.sin(frame * 2.3) * 10 : 0;
  return (
    <AbsoluteFill>
      <Dots bg={C.lime} />
      <Center gap={20}>
        <Slam at={0} size={70} color={C.white} rotate={-2}>your body</Slam>
        <Slam at={BEAT} size={70} color={C.white} rotate={2}>be like:</Slam>
        <div style={{ translate: `${shake}px 0px`, marginTop: 40 }}>
          <Slam at={BEAT * 4} size={200} color={C.orange} rotate={-3}>water.</Slam>
          <Slam at={BEAT * 5} size={200} color={C.blue} rotate={3}>now.</Slam>
        </div>
        {frame >= BEAT * 6 && <Small style={{ marginTop: 30 }}>(it's giving dehydrated)</Small>}
      </Center>
    </AbsoluteFill>
  );
};
