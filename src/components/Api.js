export class Api {
  constructor(options) {
    this._options = options;
  }

  loadAllCards() {
    return this._options.get('cards');
  };

  createCard(card) {
    return this._options.post('cards', card);
  };

  deleteCard(id) {
    return this._options.delete(`cards/${id}`);
  };

  getUserInfo() {
    return this._options.get('users/me');
  };

  setUserInfo(data) {
    return this._options.patch('users/me', {
      name: data.name,
      about: data.about,
    });
  };

  getAvatar() {
    return this._options.get('users/me/avatar');
  };

  setAvatar(avatarData) {
    console.log(avatarData.placeLink)
    return this._options.patch('users/me/avatar', {
      avatar: avatarData.placeLink
    });
  };

  useLike(id) {
    return this._options.put(`cards/${id}/likes`);
  };

  removeLike(id) {
    return this._options.delete(`cards/${id}/likes`);
  };
}