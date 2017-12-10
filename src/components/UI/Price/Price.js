import React from 'react';

const price = (props) => (
    <strong>£ {props.children.toFixed(2)}</strong>
)

export default price;