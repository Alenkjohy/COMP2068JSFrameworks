# Simple Calculator

A small web calculator built with Node.js, Express, and TypeScript. It performs basic arithmetic using URL query parameters and returns simple, human-readable results.

**Features:**
- Add, subtract, multiply, divide via a single HTTP endpoint

**Requirements:**
- Node.js (v14+ recommended)

## Quick Start
Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open your browser at http://localhost:3000

## Usage
Send requests to the `/lab2` endpoint with these query parameters:

- `method` — the operation to perform: `add`, `subtract`, `multiply`, `divide`
- `x` — first number
- `y` — second number

Request format:

```
http://localhost:3000/lab2?method=<operation>&x=<number>&y=<number>
```

Examples:

```
Add:      /lab2?method=add&x=16&y=4      → 16 + 4 = 20
Subtract: /lab2?method=subtract&x=16&y=4 → 16 - 4 = 12
Multiply: /lab2?method=multiply&x=16&y=4 → 16 × 4 = 64
Divide:   /lab2?method=divide&x=16&y=4   → 16 ÷ 4 = 4
```