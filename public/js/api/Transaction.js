/**
 * Класс Transaction наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/transaction'
 * */
class Transaction extends Entity {
    static list(data, callback){
        createRequest(this.URL + '/transaction', data, 'GET', callback);
     
        try {
         callback(this.response.err, this.response);
        } catch (err) {
         callback(err);
        };
       }

       static create(data, callback) {
        createRequest(this.URL + '/transaction', data, 'PUT', callback);
    
        try {
         callback(this.response.err, this.response);
        } catch (err) {
         callback(err);
        };
      }

      static remove(data, callback) {
        createRequest(this.URL + '/transaction', data, 'DELETE', callback);
    
        try {
         callback(this.response.err, this.response);
        } catch (err) {
         callback(err);
        };
      }
}

