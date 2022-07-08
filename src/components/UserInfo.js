export class UserInfo {

    static selectors = {
        blackBox: '.profile__black-box'
    }

    constructor(personInformation, handleClickAvatar) {
        this._name = document.querySelector(personInformation.name)
        this._job = document.querySelector(personInformation.job)
        this._avatar = document.querySelector(personInformation.avatar);
        this._id = '';
        this._handleClickAvatar = handleClickAvatar;
        this._blackBox = document.querySelector(UserInfo.selectors.blackBox)
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo(newData) {
        this._job.textContent = newData.job
        this._name.textContent = newData.name
        this._id = newData._id;
    }

    initUserLoad(dataServer) {
        this._job.textContent = dataServer.about;
        this._name.textContent = dataServer.name;
        this._avatar.src = dataServer.avatar;
        this._id = dataServer._id;
    };

    setEventListeners() {
        this._blackBox.addEventListener('click', () => { this._handleClickAvatar() });
    };

    setAvatar(avatarData) {
        this._avatar.src = avatarData.avatar;
    };

    setUserId(id) {
        this._id = id;
    };

    getUserId() {
        return this._id;
    };
}

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице.Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод
// getUserInfo, который возвращает объект с данными пользователя.Этот метод пригодится когда
// данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод
// setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
