function Title(props) {
    return React.createElement('h1', {className: 'title'}, `${props.title}`)
}

function Paragraph(props) {
    return React.createElement('p', {className: 'paragraph'}, `${props.paragraph}`)
}

function Image(props) {
    return React.createElement('img', {src: props.src, alt: props.alt})
}

function Card(props) {
    const p = document.createElement('p');
    p.innerHTML = props.paragraph;
    return React.createElement('div', {className: 'card col-sm-12 col-md-4'}, [
        React.createElement(Image, {src: props.src, alt: props.alt}),
        React.createElement(Title, {title: props.title}),
        React.createElement(Paragraph, {paragraph: p.children[0].innerText}),
    ])
}

fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
.then((result)=> result.json())
.then((json)=>{
    const array = json._embedded.episodes
    .map(({image,name,summary})=>{
        return Card({
            src: image.original,
            alt: name,
            title: name,
            paragraph: summary
        });
    });
    console.log(array);

    renderCards(array);
});

function renderCards(array){
    ReactDOM.render(
        React.createElement('div', {className: 'container'}, [
            React.createElement('div', {className: 'row'}, array)
        ]),
        document.getElementById('root')
    );
}
