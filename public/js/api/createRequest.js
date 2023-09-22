/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = function(options) {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let url = options.url;
    let formData = new FormData();

    if(options.method === 'GET') {
        url += '?';
        for(let key in options.data) {
            url += `${key}=${options.data[key]}&`
            url = url.slice(0, -1);
        }
    } else {
        for(let key in options.data) {
            formData.append(key, options.data[key]);
        }
    }

    xhr.open(options.method, url);
    xhr.send(formData);

    try {
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === this.DONE && this.status >= 200 && this.status < 300) {
                options.callback(xhr.error, xhr.response);
            }
        })
    } catch(error) { 
        options.callback(null, error);
    }
};
