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
  
  