import React, { useState } from 'react';
export default (props) => {
    const [SVG, setSVG] = useState('<span></span>');
    fetch(props.src).then(r => r.text()).then(setSVG);
    return <div {...props} dangerouslySetInnerHTML={{__html: SVG}} />;
}