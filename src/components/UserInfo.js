export class UserInfo {

    static selectors = {
        blackBox: '.profile__black-box'
    }

    constructor(personInformation) {
        this._name = document.querySelector(personInformation.name)
        this._job = document.querySelector(personInformation.job)
        this._avatar = document.querySelector(personInformation.avatar);
        this._id = '';
        this._blackBox = document.querySelector(UserInfo.selectors.blackBox)
    }
    
    initUserLoad(dataServer) {
        this._job.textContent = dataServer.about;
        this._name.textContent = dataServer.name;
        this._avatar.src = dataServer.avatar;
        this._id = dataServer._id;
    };
        
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

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
