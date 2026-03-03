const fetch = require('node-fetch');

const apiUrl = 'https://utku.berkaykoc.net/api/valorant';

// In-memory cache
const _cache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

function _getCached(key) {
  const entry = _cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) return entry.data;
  _cache.delete(key);
  return null;
}

function _setCache(key, data) {
  _cache.set(key, { data, timestamp: Date.now() });
}

/**
 * Fetches weapon information.
 * @param {string} weaponName - Name of the weapon.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object>} Weapon data.
 */
async function getWeaponInfo(weaponName, language = "en") {
  if (!weaponName) throw new Error("Weapon name is required.");
  const cacheKey = `weapon:${weaponName.toLowerCase()}:${language}`;
  const cached = _getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${apiUrl}/weapon?name=${encodeURIComponent(weaponName)}&lang=${language}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    _setCache(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Fetches map information.
 * @param {string} mapName - Name of the map.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object>} Map data.
 */
async function getMapInfo(mapName, language = "en") {
  if (!mapName) throw new Error("Map name is required.");
  const cacheKey = `map:${mapName.toLowerCase()}:${language}`;
  const cached = _getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${apiUrl}/map?name=${encodeURIComponent(mapName)}&lang=${language}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    _setCache(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Fetches agent information with abilities.
 * @param {string} agentName - Name of the agent.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object>} Agent data.
 */
async function getAgentInfo(agentName, language = "en") {
  if (!agentName) throw new Error("Agent name is required.");
  const cacheKey = `agent:${agentName.toLowerCase()}:${language}`;
  const cached = _getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${apiUrl}/agent?name=${encodeURIComponent(agentName)}&lang=${language}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    _setCache(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Gets a random agent for team composition picks.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object>} Random agent data.
 */
async function getRandomAgent(language = "en") {
  const agents = [
    "Astra", "Breach", "Brimstone", "Chamber", "Clove", "Cypher",
    "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett",
    "KAY/O", "Killjoy", "Neon", "Omen", "Phoenix", "Raze",
    "Reyna", "Sage", "Skye", "Sova", "Viper", "Vyse", "Yoru"
  ];
  const random = agents[Math.floor(Math.random() * agents.length)];
  return getAgentInfo(random, language);
}

/**
 * Gets a random weapon.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object>} Random weapon data.
 */
async function getRandomWeapon(language = "en") {
  const weapons = [
    "Classic", "Shorty", "Frenzy", "Ghost", "Sheriff",
    "Stinger", "Spectre", "Bucky", "Judge", "Bulldog",
    "Guardian", "Phantom", "Vandal", "Marshal", "Operator",
    "Ares", "Odin", "Knife"
  ];
  const random = weapons[Math.floor(Math.random() * weapons.length)];
  return getWeaponInfo(random, language);
}

/**
 * Generates a random team composition of 5 agents.
 * @param {string} [language="en"] - Language code.
 * @returns {Promise<Object[]>} Array of 5 random agent data objects.
 */
async function getRandomTeam(language = "en") {
  const agents = [
    "Astra", "Breach", "Brimstone", "Chamber", "Clove", "Cypher",
    "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett",
    "KAY/O", "Killjoy", "Neon", "Omen", "Phoenix", "Raze",
    "Reyna", "Sage", "Skye", "Sova", "Viper", "Vyse", "Yoru"
  ];

  // Shuffle and pick 5
  const shuffled = agents.sort(() => Math.random() - 0.5).slice(0, 5);
  const team = await Promise.all(shuffled.map((name) => getAgentInfo(name, language)));
  return team;
}

/**
 * Clears the cache.
 */
function clearCache() {
  _cache.clear();
}

module.exports = {
  getWeaponInfo,
  getMapInfo,
  getAgentInfo,
  getRandomAgent,
  getRandomWeapon,
  getRandomTeam,
  clearCache,
};