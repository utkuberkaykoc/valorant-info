const axios = require('axios');

const apiUrl = 'https://utku.berkaykoc.net/api/valorant';

async function getWeaponInfo(weaponName, language = "en") {
  try {
    const response = await axios.get(`${apiUrl}/weapon`, {
      params: { name: weaponName, lang: language }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
}

async function getMapInfo(mapName, language = "en") {
  try {
    const response = await axios.get(`${apiUrl}/map`, {
      params: { name: mapName, lang: language }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
}

async function getAgentInfo(agentName, language = "en") {
  try {
    const response = await axios.get(`${apiUrl}/agent`, {
      params: { name: agentName, lang: language }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
}

module.exports = {
  getWeaponInfo,
  getMapInfo,
  getAgentInfo
};

/*
        _   _            _               _               _                           _   
  _   _| |_| | ___   _  | |__   ___ _ __| | ____ _ _   _| | _____   ___   _ __   ___| |_ 
 | | | | __| |/ / | | | | '_ \ / _ \ '__| |/ / _` | | | | |/ / _ \ / __| | '_ \ / _ \ __|
 | |_| | |_|   <| |_| |_| |_) |  __/ |  |   < (_| | |_| |   < (_) | (__ _| | | |  __/ |_ 
  \__,_|\__|_|\_\\__,_(_)_.__/ \___|_|  |_|\_\__,_|\__, |_|\_\___/ \___(_)_| |_|\___|\__|
                                                   |___/                                 
*/