/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    createRequest(this.URL + '/account/' + id,'GET',data, callback);
    
    try {
      callback(this.response.err, this.response);
     } catch (err) {
      callback(err);
     };
  }
}
