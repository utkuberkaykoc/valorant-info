# Valorant Info - Unofficial Valorant API Wrapper for Node.js 🎮

✅ **Free to use!**
🔥 Retrieve **Valorant** agent, weapon, and map data with ease! **Multi-language** support included.

![NPM Version](https://img.shields.io/npm/v/valorant-info?color=blue&style=flat-square)
![Downloads](https://img.shields.io/npm/dt/valorant-info?color=green&style=flat-square)
![License](https://img.shields.io/npm/l/valorant-info?style=flat-square)

> **Valorant Info** is a simple and efficient Node.js wrapper for fetching Valorant game data such as agents, weapons, and maps. Now with full language support (`en`, `tr`, and more)! 🚀

---

## 📌 Features

✅ Fetch **Weapon Information** (e.g., Phantom, Vandal, Operator) 🔫  
✅ Retrieve **Map Information** (e.g., Breeze, Bind, Haven) 🗺️  
✅ Get **Agent Details** with **Abilities** (e.g., Jett, Reyna, Phoenix) 🎭  
✅ **Multi-Language Support** (`en`, `tr`, and any other language) 🌍  
✅ **Structured and Clean JSON Responses** 🧹  
✅ No need for authentication or API keys 🔑  
✅ Works with **Node.js** and supports **Promises & Async/Await** ⚡  

---

## 📦 Installation

Install via **npm**:

```sh
npm install valorant-info
```

Or using **yarn**:

```sh
yarn add valorant-info
```

---

## 🚀 Usage

### Import the package

```js
const valorantInfo = require("valorant-info");
```

### Get Weapon Information
```js
valorantInfo.getWeaponInfo("phantom", "tr")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Get Map Information
```js
valorantInfo.getMapInfo("breeze", "fr")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Get Agent Information with Abilities
```js
valorantInfo.getAgentInfo("jett", "es")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 📜 API Reference

### `getWeaponInfo(weaponName, language)`
- Fetches details of a specified weapon.
- **Parameters:**
  - `weaponName` _(string)_ → Name of the weapon (e.g., "phantom", "vandal").
  - `language` _(string, optional)_ → Language code (`"en"`, `"tr"`, or any other language). Defaults to `"en"`.
- **Returns:** `Promise<object>` → Weapon details in JSON format.

### `getMapInfo(mapName, language)`
- Fetches details of a specified map.
- **Parameters:**
  - `mapName` _(string)_ → Name of the map (e.g., "breeze", "bind").
  - `language` _(string, optional)_ → Language code (`"en"`, `"tr"`, or any other language). Defaults to `"en"`.
- **Returns:** `Promise<object>` → Map details in JSON format.

### `getAgentInfo(agentName, language)`
- Fetches details of a specified agent, including abilities.
- **Parameters:**
  - `agentName` _(string)_ → Name of the agent (e.g., "jett", "reyna").
  - `language` _(string, optional)_ → Language code (`"en"`, `"tr"`, or any other language). Defaults to `"en"`.
- **Returns:** `Promise<object>` → Agent details with abilities in JSON format.

---

## 🌍 Language Support Example

### English (Default)
```js
valorantInfo.getAgentInfo("breach")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Turkish
```js
valorantInfo.getAgentInfo("breach", "tr")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### French
```js
valorantInfo.getAgentInfo("breach", "fr")
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## ⚙️ Requirements

- **Node.js v14+** recommended

---

## 🛠️ Contributing

Contributions are welcome! If you want to add features or fix bugs:
1. Fork the repository 📌
2. Create a new branch 🔧
3. Commit your changes ✅
4. Push and submit a PR 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🌟 Support & Contact

If you find this package useful, consider giving it a **GitHub star ⭐**! 
For any questions or issues, you can reach out via **[GitHub Issues](https://github.com/utkuberkaykoc/valorant-info/issues)**.

---

**Happy Coding! 🎮🚀**

