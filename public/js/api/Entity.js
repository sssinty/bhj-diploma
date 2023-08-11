/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback){
   createRequest({
    url: this.URL,
    data,
    method: 'GET'
   })

   try {
    callback(err, response);
   } catch(err) {
    callback(err);
   }

  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: this.URL,
      data,
      method: 'PUT'
    })

    try {
     callback(err, response);
    } catch (err) {
     callback(err);
    };
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    createRequest({
      url: this.URL,
      data,
      method: 'DELETE'
    })

    try {
     callback(err, response);
    } catch (err) {
     callback(err);
    };
  }
}
