import { AbsoluteFill, interpolate, Series, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import React from "react";
import { C } from "./kit";
import { G1Hook } from "./G1Hook";
import { G2Thirst } from "./G2Thirst";
import { G3Reveal } from "./G3Reveal";
import { G4Cold } from "./G4Cold";
import { G5Check } from "./G5Check";
import { G6Split } from "./G6Split";
import { G7Pov } from "./G7Pov";
import { G8Pearl } from "./G8Pearl";
import { G9Words } from "./G9Words";
import { G10End } from "./G10End";

// Every cut lands on a bar line (64 frames = 4 beats at 112.5 BPM).
const scenes: [React.FC, number][] = [
  [G1Hook, 128],
  [G2Thirst, 128],
  [G3Reveal, 192],
  [G4Cold, 128],
  [G5Check, 192],
  [G6Split, 192],
  [G7Pov, 192],
  [G8Pearl, 192],
  [G9Words, 192],
  [G10End, 264],
];
export const GENZ_TOTAL = scenes.reduce((a, [, d]) => a + d, 0);
const cuts = scenes.reduce<number[]>((acc, [, d], i) => [...acc, (acc[i - 1] ?? 0) + d], []).slice(0, -1);

/** White flash on each cut. */
const Flash: React.FC = () => {
  const frame = useCurrentFrame();
  const o = Math.max(0, ...cuts.map((c) => interpolate(frame - c, [0, 5], [0.85, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * (frame >= c ? 1 : 0)));
  return <AbsoluteFill style={{ backgroundColor: C.white, opacity: o, pointerEvents: "none" }} />;
};

export const PerlaGenZ: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: C.ink }}>
    <Series>
      {scenes.map(([Scene, d], i) => (
        <Series.Sequence key={i} durationInFrames={d}>
          <Scene />
        </Series.Sequence>
      ))}
    </Series>
    <Flash />
    <Audio src={staticFile("genz-beat.mp3")} />
  </AbsoluteFill>
);
