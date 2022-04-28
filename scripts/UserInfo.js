export class UserInfo {
    constructor(personInformation) {
        this._name = document.querySelector(personInformation.name)
        this._job = document.querySelector(personInformation.job)

        getUserInfo() {
            return {
                name: this._name.textContent,
                job: this._job.textContent,
            };
        }

        setUserInfo(newData) {
            this._job.textContent = newData.job
            this._name.textContent = newData.name
        }

    }

}

Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
Этот класс:
Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
Содержит публичный метод
getUserInfo, который возвращает объект с данными пользователя.Этот метод пригодится когда 
данные пользователя нужно будет подставить в форму при открытии.
Содержит публичный метод
setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

export default class UserInfo {
    constructor(data) {
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.job);
    };

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.firstInput;
        this._job.textContent = userInfo.secondInput;
    };
}