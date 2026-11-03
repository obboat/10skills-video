# Perla: "Pour Something Pure" (spec ad)

A 2-minute, 9:16 vertical spec advertisement for Perla Mineral Water, built in Remotion from a single product photo.

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

- `public/hero.jpg`: the supplied product photo, colour-graded (cooler, darker, vignette, brand colours preserved).
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
