const CLIENT_ID = "a859f4d7b9114b9c9f3535a1d546e89c"
const CLIENT_SECRET = "c0b9b2f282f8404b8e3fdd91665c6434"
const REDIRECT_URI = "http://localhost:3000/users"
const spotifyURL = "https://accounts.spotify.com"

module.exports = {
  authenticate: async function (_req, res) {
    const scopes = 'user-read-private user-read-email user-library-read user-top-read';
    res.redirect(spotifyURL + '/authorize' +
      '?response_type=code' +
      '&client_id=' + CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(REDIRECT_URI));
  },
  getAccessToken: async function (req, res) {
    //const authCode = req.query.code
    const authCode = "AQAG21rsaLyryxExo2LzQwOw_tIJ7pFWHK2KnozLtUxjGC-IuIgNqevhUqbPRP7JINUa6-nqtawaMb53HJx_wJRX7Ciy0yzdZ9Xa6NTer_7M5QaYO563HLxzmeJSjuM27taM-PsF4_jnY8lGDO-HS4t3tLRf2SCEt3q9E_p4uHBPS6ZtYNLjF4yWpmpG-KM4g5neLJve3m_A65smgrbbi9It1R_rC7xW-ylE7UUj1-a3B_huCw"
    const url = spotifyURL + '/api/token'
      + '?grant_type=authorization_code'
      + '&code=' + authCode
      + '&redirect_uri=http://localhost:3000'

    console.log(url)
    const clientIDBase64 = Buffer.from(CLIENT_ID).toString('base64')
    res.header("Authorization", "Basic " + clientIDBase64)
    console.log(res)
    res.redirect(url)
  }
}