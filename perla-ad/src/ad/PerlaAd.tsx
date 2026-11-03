import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import React from "react";
import { Finish, INK } from "./shared";
import { S1Droplet } from "./S1Droplet";
import { S2Stillness } from "./S2Stillness";
import { S3Reveal } from "./S3Reveal";
import { S4Cap } from "./S4Cap";
import { S5Drops } from "./S5Drops";
import { S6Label } from "./S6Label";
import { S7Moments } from "./S7Moments";
import { S8Pearl } from "./S8Pearl";
import { S9End } from "./S9End";

export const XFADE = 24;
const scenes: [React.FC, number][] = [
  [S1Droplet, 330],
  [S2Stillness, 360],
  [S3Reveal, 450],
  [S4Cap, 390],
  [S5Drops, 420],
  [S6Label, 450],
  [S7Moments, 480],
  [S8Pearl, 360],
  [S9End, 552],
];
export const TOTAL = scenes.reduce((a, [, d]) => a + d, 0) - XFADE * (scenes.length - 1);

export const PerlaAd: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: INK }}>
    <TransitionSeries>
      {scenes.map(([Scene, d], i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: XFADE })}
            />
          )}
          <TransitionSeries.Sequence durationInFrames={d}>
            <Scene />
          </TransitionSeries.Sequence>
        </React.Fragment>
      ))}
    </TransitionSeries>
    <Finish />
    <Audio src={staticFile("score.mp3")} />
  </AbsoluteFill>
);
