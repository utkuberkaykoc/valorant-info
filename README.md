# valorant-info 🎮

VALORANT agent & weapon information API wrapper for Node.js — with random picks, team generators, and caching.

## 🚀 What's New in v2.0.0

- **`getRandomAgent()`** — Get a random VALORANT agent
- **`getRandomWeapon()`** — Get a random weapon
- **`getRandomTeam()`** — Generate a random 5-agent team composition
- **In-memory caching** — 5-minute TTL for faster repeated lookups
- **`clearCache()`** — Manual cache control
- **Input validation** — Better error messages
- **URL encoding** — Proper handling of special characters in names

## 📦 Installation

```bash
npm install valorant-info
```

## 📋 Usage

### Get Agent Info

```js
const { getAgent } = require("valorant-info");

const agent = await getAgent("Jett");
console.log(agent.name);         // "Jett"
console.log(agent.role);         // "Duelist"
console.log(agent.abilities);    // Agent abilities
```

### Get Weapon Info

```js
const { getWeapon } = require("valorant-info");

const weapon = await getWeapon("Vandal");
console.log(weapon.name);    // "Vandal"
console.log(weapon.cost);    // Weapon cost
console.log(weapon.stats);   // Weapon statistics
```

### Random Agent

```js
const { getRandomAgent } = require("valorant-info");

const agent = await getRandomAgent();
console.log(`Play as: ${agent.name} (${agent.role})`);
```

### Random Weapon

```js
const { getRandomWeapon } = require("valorant-info");

const weapon = await getRandomWeapon();
console.log(`Use: ${weapon.name}`);
```

### Random Team Composition

```js
const { getRandomTeam } = require("valorant-info");

const team = await getRandomTeam();
// Returns 5 random agents for a team
team.forEach(agent => {
  console.log(`  ${agent.name} - ${agent.role}`);
});
```

### Cache Control

```js
const { clearCache } = require("valorant-info");

clearCache(); // Clear all cached data
```

## 📡 API

| Function | Description |
|----------|-------------|
| `getAgent(name)` | Get agent details by name |
| `getWeapon(name)` | Get weapon details by name |
| `getRandomAgent()` | Get a random agent |
| `getRandomWeapon()` | Get a random weapon |
| `getRandomTeam()` | Generate a random 5-agent team |
| `clearCache()` | Clear the in-memory cache |

## 📄 License

MIT © Utku Berkay Koç
