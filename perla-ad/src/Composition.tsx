import { Composition } from "remotion";
import { PerlaAd, TOTAL } from "./ad/PerlaAd";

export const MyComposition = () => (
  <Composition
    id="PerlaAd"
    component={PerlaAd}
    durationInFrames={TOTAL}
    fps={30}
    width={1080}
    height={1920}
  />
);
