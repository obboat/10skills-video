# Perla: "Pour Something Pure" (spec ad)

A 2-minute, 9:16 vertical spec advertisement for Perla Mineral Water, built in Remotion from a single product image.

**This is a portfolio/spec piece. It is not affiliated with or endorsed by the Perla brand.** The end card says so.

## Structure (30 fps, 3600 frames = 120 s, 24-frame crossfades)

| # | Scene | Visual | On-screen copy |
|---|-------|--------|----------------|
| 1 | Droplet | A drop falls into dark water, rings spread | Some things are worth slowing down for. |
| 2 | Stillness | Deep water, rising bubbles | Before the rush of the day, there is a moment of stillness. BREATHE |
| 3 | Reveal | Hero bottle fades up from darkness | INTRODUCING CALM. Clarity, held in your hand. |
| 4 | Cap | Slow push on the cap | Sealed for the moment you twist it open. |
| 5 | Drops | Condensation close-up, camera drifts up | Cool. Clear. Quietly refreshing. |
| 6 | Label | Label close-up | PER·LA, the word for pearl in Spanish and Italian. The finest things are often the simplest. |
| 7 | Moments | Water light, gold rule | At your desk. On the pitch. Between meetings. On the long drive home. Wherever the day takes you. |
| 8 | Pearl | A luminous pearl forms | Rare things are simple. Simple things are rare. |
| 9 | End card | Vignetted bottle, wordmark | PERLA · MINERAL WATER · Pour something pure. + spec disclaimer |

## Claims policy

The only factual statement is that *perla* means "pearl" in Spanish and Italian
([SpanishDict](https://www.spanishdict.com/translate/perla), [WordReference EN-IT](https://jann.wordreference.com/enit/PEARL)).
No claims are made about the water's source, mineral content, producer or certifications, because public sources could not confirm them.

## Assets

- `public/bottle-full.jpg`: the supplied full-bottle product image (399×501 source), with the GFA logo and the hashtag removed by inpainting, upscaled 5.4× and extended to 9:16 with a navy gradient. Because the source is small, camera moves are kept to 1.55× zoom or less.
- `public/score.mp3`: original ambient score synthesized for this project (numpy + ffmpeg), with a droplet sound at the impact frame.
- `public/fonts/`: Cormorant Garamond and Montserrat (SIL Open Font License) from [google/fonts](https://github.com/google/fonts).

## Commands

```bash
npm i
npx remotion studio            # preview
npx remotion render PerlaAd out/perla-ad.mp4
```

In sandboxed environments without Remotion's Chrome download, add
`--browser-executable=/path/to/chrome-headless-shell`.

---

# Gen Z cut: "Chale, stay hydrated" (composition `PerlaGenZ`)

A 60-second, 9:16 version: bright palette (sky, electric blue, orange, lime, pink), chunky Unbounded type, stickers and sparkles, with hard cuts and a white flash on every bar line. The original amapiano-style track (`public/genz-beat.mp3`, synthesized here) runs at 112.5 BPM, which is exactly 16 frames per beat, so every slam and pop lands on the beat.

| # | Frames | Copy |
|---|--------|------|
| 1 | 0–128 | Chale. The sun no dey joke |
| 2 | 128–256 | Your body be like: WATER. NOW. (it's giving dehydrated) |
| 3 | 256–448 | Enter: bottle drop + PERLA / mineral water / main character stickers (beat drops here) |
| 4 | 448–576 | No cap, e cold. |
| 5 | 576–768 | Hydration check: Lecture hall, Match day, Trotro ride, Night out |
| 6 | 768–960 | Collage + STAY HYDRATED / SIP SIP HOORAY tickers |
| 7 | 960–1152 | POV: you finally drank water. glowing / skin? clear. |
| 8 | 1152–1344 | Fun fact: "perla" = pearl in Spanish & Italian. Rare. Like you. (breakdown) |
| 9 | 1344–1536 | sip. chill. vibe. repeat. |
| 10 | 1536–1800 | PERLA · MINERAL WATER · chale, stay hydrated + spec disclaimer |

The bottle image (`public/bottle-card.jpg`) is the same cleaned source as the classy cut, upscaled 3× with a brightness and saturation lift. Fonts: Unbounded and Space Grotesk (SIL OFL).

```bash
npx remotion render PerlaGenZ out/perla-genz.mp4
```
