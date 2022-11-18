const axios = require('axios'),
  BASE_URL = 'https://www.holopin.io',
  ERROR_MSG = 'Username is missing! Please provide your Holopin username.',
  getBadges = async (username) => {
    const config = {
      url: '/api/stickers',
      baseURL: BASE_URL,
      params: {
        username
      },
      headers: {
        'content-type': 'application/json'
      }
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (err) {
      return err;
    }
  };

module.exports = (username, cb) => {
  if (typeof cb !== 'function') {
    if (!username) return Promise.reject(new Error(ERROR_MSG));

    return getBadges(username);
  }

  getBadges(username)
    .then((badges) => cb(null, badges))
    .catch(cb);
};
