const production = {
  url: {
    API_URL_SULAMADAHA: `someurl`,
    API_URL_TAKOME: `someurl`,
    API_URL_TOBOLOLO: `someurl`,
  },
};

const development = {
  url: {
    API_URL_SULAMADAHA: `https://api-sulamadaha.herokuapp.com`,
    API_URL_TAKOME: `https://api-takome.herokuapp.com`,
    API_URL_TOBOLOLO: `https://api-tobololo.herokuapp.com`,
  },
};

export const config =
  process.env.NODE_ENV === `development` ? development : production;
