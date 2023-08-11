/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {url, data:{mail, password}, method, callback}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData();
    if(options.method === 'GET') {
       for(let key in options.data) {
        options.url = options.url + '?' + key + '=' + options.data[key] + '&';
       };
    }else {
        for(let key in options.data) {
            formData.append(key, options.data[key]);
        };
    };

    xhr.open(options.method, options.url);
    xhr.send(formData);

    try {
        xhr.addEventListener('readystatechange', function() {
            if(this.readyState === this.DONE && this.status === 201) {
                options.callback(this.response.err, this.response);
            };
        });
    }catch (err){
        options.callback(err);
    };

};
