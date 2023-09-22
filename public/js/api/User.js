/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  
  static URL = '/user'; 

  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    if(user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    delete localStorage.user;
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    let rawData = localStorage.getItem('user');
    if(rawData) {
      return JSON.parse(rawData);
    };
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {
    createRequest({
      url: this.URL + '/current',
      method:'GET',
      callback: (error, response) => {
        if(response.success === true) {
          this.setCurrent(response.user);
        }
          this.unsetCurrent();
          callback(error, response);
      }
    });
  } 

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data: data,
      callback: (error, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(error, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    createRequest({
      url: this.URL + '/register',
      data: data,
      method: 'POST',
      callback:  (error, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(error, response);
      }
    });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      callback: (error, response) => {
        if(response.success === true) {
          User.unsetCurrent();
        }
        callback(error, response);
      }
      });
  }
}
