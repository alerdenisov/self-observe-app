# Self Observe 🧠

A beautiful, mobile-first mental health self-observation app built with React, Tailwind CSS v4, and Motion (Framer Motion).

## Features

- **6 Mental Health Tracks**: Monitor mood, sleep, pressure, thinking, reality, and motion
- **Temperature Scale**: Rate each aspect from 0-10 with an intuitive thermometer interface
- **Source Identification**: When values are high (≥5), identify specific triggers and sources
- **Daily Overview**: See a comprehensive summary of your mental state
- **Auto-Save**: All data is automatically saved to local storage
- **Beautiful Animations**: Smooth micro-interactions powered by Motion
- **Mobile-First Design**: Optimized for mobile devices with a soft, calming aesthetic
- **PWA Ready**: Can be installed as a progressive web app

## Design Inspiration

The app's design is inspired by mental health tracking tools, featuring:
- Soft pastel color palette (beige, cream, soft blues, greens, yellows, corals)
- Rounded corners and smooth transitions
- Clean, readable typography with Inter font
- Intuitive thermometer-style sliders

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling with custom theme
- **Motion (Framer Motion)** - Animations and micro-interactions
- **Vite** - Build tool and dev server
- **Bun** - Package manager

## Getting Started

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## How to Use

1. **Set Your Temperature**: For each mental health track, tap the thermometer scale to set your current "temperature" from 0 (normal) to 10 (critical)

2. **Identify Sources**: When you set a value of 5 or higher, you'll be prompted to select what's causing the high temperature from a list of common sources

3. **Track Daily**: Come back each day to track your mental state and identify patterns over time

4. **Review Overview**: Check the daily overview card to see your average score and status for each track

## Data Storage

All data is stored locally in your browser's localStorage. Each day's entry is saved automatically as you make changes. No data is sent to any server - your mental health information stays completely private on your device.

## Color Coding

- 🟢 **0-3**: Low (Normal range)
- 🟡 **4-6**: Medium (Moderate concern)
- 🔴 **7-10**: High (Needs attention)

## Tracks Explained

- **Mood**: Your emotional state and general feelings
- **Sleep**: Quality and quantity of sleep
- **Pressure**: Stress levels and external pressures
- **Thinking**: Clarity of thought and mental processes
- **Reality**: Connection to reality and present moment
- **Motion**: Physical energy and movement levels

## Customization

The app uses Tailwind CSS v4 with a custom color palette. You can modify colors in `src/lib/tracks.ts` and the overall theme in `src/index.css`.

## License

MIT
