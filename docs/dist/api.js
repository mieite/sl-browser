import fetchIntercept from '../snowpack/pkg/fetch-intercept.js';

const URL = 'https://api.streamersonglist.com/v1/'

const getJson = (command) => fetch(`${URL}${command}`, {
  headers: {
    Accept: 'application/json'
  }
});

const isJsonResponse = (response) => {
  const contentType = response.headers.get('content-type');
  return contentType && contentType.includes('application/json');
};

const handleResponseError = err => Promise.reject(err);

fetchIntercept.register({
  request: (url, config) => {
    const defaultConfig = {
      credentials: 'same-origin'
    };
    return [url, { ...defaultConfig, ...config }];
  },
  response: (response) => {
    if (!response.ok && response.status !== 404) {
      return handleResponseError(response);
    } if (isJsonResponse(response)) {
      return response.json();
    }
    return response;
  }
});

export const getUserDetails = (username) => getJson(`streamers/${username}`);
export const getPlaylistHistory = (userId, position = 0) => getJson(`streamers/${userId}/playHistory?size=100000&current=${position}&type=playedAt&order=desc&period=all&songId=null`);
