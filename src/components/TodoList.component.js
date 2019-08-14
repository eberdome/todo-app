import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = (props) => {
    const { items } = props;
    return (
        <ListGroup variant="flush">
            {items.map((item, index) => (
                <ListGroup.Item key={index} style={{textTransform: 'capitalize'}}>{index + 1}. {item.text}</ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default TodoList;
