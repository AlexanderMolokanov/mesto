class Api {
    constructor(options) {
      this._options = options;
    }
  
    getInitialCards() {
      return this._options.get('cards');
    }
  
    get(type) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'GET',
          headers: this._headers
      });
      return this._renderPromise(promise);
  };

  // другие методы работы с API
  }
  
  const client = new Client('https://nomoreparties.co/v1/cohort-42/', {
    authorization: 'f94fe150-fc6f-49bf-839d-cc1279afa58f',
    'Content-Type': 'application/json',
    'Accept': 'application/json: charset=utf-8'
});

export default class API {
  constructor(client) {
      this._client = client;
  };

  loadAllCards() {
      return this._client.get('cards');
  };

  createCard(card) {
      return this._client.post('cards', card);
  };

  deleteCard(id) {
      return this._client.delete(`cards/${id}`);
  };

  getUserInfo() {
      return this._client.get('users/me');
  };

  setUserInfo(data) {
      return this._client.patch('users/me', {
          name: data.name,
          about: data.about,
      });
  };

  getAvatar() {
      return this._client.get('users/me/avatar');
  };

  setAvatar(avatarData) {
      return this._client.patch('users/me/avatar', {
          avatar: avatarData.avatar
      });
  };

  useLike(id) {
      return this._client.put(`cards/${id}/likes`);
  };

  removeLike(id) {
      return this._client.delete(`cards/${id}/likes`);
  };
}



export default class Client {
  constructor(url, headers) {
      this._url = url;
      this._headers = headers;
  };

  _renderPromise(promise) { 
      return promise
          .then((res) => {
             if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((obj) => {
              return obj;
          });
  };

  get(type) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'GET',
          headers: this._headers
      });
      return this._renderPromise(promise);
  };

  post(type, item) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
              name: item.name,
              link: item.link,
              image: item.image
          })
      });
      return this._renderPromise(promise);
  };

  patch(type, keys) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(keys)
      });
      return this._renderPromise(promise);
  };

  delete(type) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'DELETE',
          headers: this._headers
      });
      return this._renderPromise(promise);
  };

  put(type) {
      const promise = fetch(`${this._url}/${type}`, {
          method: 'PUT',
          headers: this._headers
      });
      return this._renderPromise(promise);
  };
};


// index
const client = new Client('https://mesto.nomoreparties.co/v1/cohort-38', {
    authorization: 'fc656d80-9f90-48b6-9907-1de866c0eaf7',
    'Content-Type': 'application/json',
    'Accept': 'application/json: charset=utf-8'
});


const api = new API(client); 