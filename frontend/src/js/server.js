class Server {
  constructor(baseURL, options) {
    this.baseURL = baseURL
    this.options = options
  }
  _request(url, options = null) {
    const URL = this.baseURL + url
    return fetch(URL, options ? {...this.options, ...options} : this.options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error("Server's answer isn't correct...")
      })
      .catch((err) => console.error(err))
  }
  get(url) {
    let options = {method: 'GET'}
    return this._request(url, options)
  }
  delete(url) {
    let options = {method: 'DELETE'}
    return this._request(url, options)
  }
  post(url, body) {
    let options = {method: 'POST', body: JSON.stringify(body)}
    return this._request(url, options)
  }
  put(url, body) {
    let options = {method: 'PUT', body: JSON.stringify(body)}
    return this._request(url, options)
  }
}

export default new Server('/', {
  headers: {
    'Content-Type': 'application/json',
  },
})

