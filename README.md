# Betterway

**Digital visualization about surveillance capitalism.**

Betterway is a wellness brand that does not exist. It offers a free personality diagnosis in ten questions, then shows you exactly what you just handed over, and to whom.

Live: [betterway.jankowski.digital](https://betterway.jankowski.digital)

## About

Practical half of a bachelor diploma in Communication Design at School of Form, SWPS University in Warsaw (2026), defended with distinction. The written half is a thesis on surveillance capitalism and the surveillance society in the context of new media, grounded in Shoshana Zuboff, Byung-Chul Han and Jonathan Crary.

The experience runs in four acts:

1. **Landing** - a wellness brand you would trust in three seconds
2. **Quiz** - ten warm questions, each one secretly a data category
3. **Diagnosis** - a personality-type result card, the reward
4. **Reveal** - a glitch cut to black, and a breakdown of what each answer is worth to a data broker

Nothing is ever sent anywhere. All state lives in the browser tab and disappears with it.

## Features

- Full Polish and English versions behind one toggle
- Mobile first (breakpoints at 640 and 768px)
- Two design systems in one build: cream/sage wellness, and its near-black inverse for the reveal
- Type: Instrument Serif, Manrope, JetBrains Mono

## Stack

React, Framer Motion, Vite. The whole app is a single component in `src/Betterway.jsx`, with images embedded as base64.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`vite.config.js` uses `base: './'`, so the contents of `dist/` can be uploaded to any host or subfolder as is.

## Author

Jakub Jankowski - [jankowski.digital](https://jankowski.digital)
