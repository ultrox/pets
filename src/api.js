/**
 * String → Promise
 * asyncronously get data from github
 */
export default function fetchFrom(endpoint) {
  const NO_TOKEN_ERR = 'There is no GITHUB TOKEN!'
  const RESPONSE_NOT_OK = 'Fetching from Github faild!'

  if (typeof REACT_APP_GITHUB_TOKEN === 'undefined') {
    return Promise.reject(new Error(NO_TOKEN_ERR))
  }

  return fetch(endpoint, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject(new Error(RESPONSE_NOT_OK))
    }
  })
}
