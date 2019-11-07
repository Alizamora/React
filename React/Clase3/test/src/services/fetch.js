export default (url, responseType = 'json') => 
new Promise((resolve, reject) => 
    fetch(url)
    .then(r => r[responseType]())
    .then((response) => resolve(response))
    .catch(reject));
