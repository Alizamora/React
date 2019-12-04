export default (value) => new Promise((resolve, reject) => {
    fetch(`https://api.pokemontcg.io/v1/cards?${value ? `name=${value}` : ''}`)
    .then(res => res.json())
    .then(resolve)
    .catch(reject)
});