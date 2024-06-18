// const env = 'LOCAL';
const env = 'DEV';
// const env = 'QA';
// const env = 'LIVE';

const API_SERVER_LIST = {
  QA: 'http://localhost:3232/api/v1',
  DEV: 'http://works-v3.doublt.com/api/v1',
  LOCAL: 'http://192.168.1.119:8080/api/v1',
  LIVE: 'http://52.78.168.136:8080/api/v1',
};

export const API_SERVER = API_SERVER_LIST[env];
