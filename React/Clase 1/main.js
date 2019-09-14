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
    return React.createElement('div', {className: 'card col-sm-12 col-md-4'}, [
        React.createElement(Image, {src: props.src, alt: props.alt}),
        React.createElement(Title, {title: props.title}),
        React.createElement(Paragraph, {paragraph: props.paragraph}),
    ])
}

ReactDOM.render(
    //React.createElement(Card),
    //React.createElement('div', {className: 'container'}, [Title(), Paragraph(), Image()]),
    React.createElement('div', {className: 'container'}, [
        React.createElement('div', {className: 'row'}, [
            React.createElement(Card, {
                title: 'Hey hola cangrejito',
                src: './cangrejito.jpeg', alt: 'this is a image',
                paragraph: 'Aquí solo hablamos de cangrejitos lindos'
            }),
            React.createElement(Card, {
                title: 'Subete a mi moto',
                src: './imgEjemplo.jpeg', alt: 'this is a image',
                paragraph: 'y saldrás con el c...  roto !! mmmmm'
            })
        ])
    ]),
    document.getElementById('root')
);

