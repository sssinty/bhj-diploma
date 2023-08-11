/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.setItem('user', user);
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
    localStorage.getItem('user');
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {
    createRequest({
      url: this.URL + '/current',
      method:'GET',
      callback: (err, response) => {
        if(response.success) {
          this.current();
        }
        this.unsetCurrent();
        callback(err, response);
      }
     });

    try {
      callback(err,response);
     } catch (err) {
      callback(err);
     };
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
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });

    try{
      if(response.success === true) {
        User.setCurrent(response.user);
      }
    } catch (err) {
      callback(err);
    }
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
      data,
      method: 'POST',
      callback: (err, response) => {
        if(response.success === true) {
          this.setCurrent(response.user);
        };
        callback(err, response);
      }
    })
    
    try {
      callback(err, response);
     } catch (err) {
      callback(err);
     };
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    createRequest({
      url: this.URL + '/logut',
      method: 'POST',
      callback: (err, response) => {
        if(response.success === true) {
          this.unsetCurrent();
        } 
        callback(err, response);
      }
    });

    try {
      callback(err, response);
     } catch (err) {
      callback(err);
     };
  }
}
