// Helper class
// static methods can be used even if you do not instanciate it.

// 1. We wrap everything in a promise
// then we make an XMLHttpRequest GET request, with the URl
// This when request Done && 200 for XMLHttpRequest we parse the request to be JSOn
// or resolve the error
// then we send the http request.
export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', url);
            HTTP.onreadystatechange = function() {
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                    console.log('jo');
                    reject('Something went wrong');
                }
            };
            HTTP.send();
        });
    }
}