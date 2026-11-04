import { Composition } from "remotion";
import { PerlaAd, TOTAL } from "./ad/PerlaAd";
import { GENZ_TOTAL, PerlaGenZ } from "./genz/PerlaGenZ";

export const MyComposition = () => (
  <>
    <Composition id="PerlaAd" component={PerlaAd} durationInFrames={TOTAL} fps={30} width={1080} height={1920} />
    <Composition id="PerlaGenZ" component={PerlaGenZ} durationInFrames={GENZ_TOTAL} fps={30} width={1080} height={1920} />
  </>
);
