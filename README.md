![Mudra](/public/mudra.png)

# Meditation Calculator with Next.js

With this program, you can calculate the total practice time of your meditation routine.

# Features

- Next.js
- full-stack TypeScript application
- Tailwind CSS
- Vitest
- Docker
- favicon
- unit tests

## Motivation

I have had a lot of practice in programming and meditation and wanted a simple app to calculate total lifetime meditation practice quickly.

## Number magic

There is the so-called 10.000 hours practice rule coming from Malcolm Gladwell.

This quantity marks a pro-level meditator.

# Install and usage

## Node.js

It would help if you had Node.js installed in the repo folder; execute these:

```
npm install
npm run dev
```

Then open the browser at [http://localhost:3000/](http://localhost:3000/).

## Docker

It would be best if you had Docker installed, then in the repo folder, execute these:

```
docker buildx build -t meditation-calculator-next:v01 .
docker run -p 3000:3000 meditation-calculator-next:v01
```

Then open the browser at [http://localhost:3000/](http://localhost:3000/).

# License

Please see [the LICENSE file](LICENSE).
