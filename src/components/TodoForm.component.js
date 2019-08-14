import React, { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TodoForm = (props) => {

    // object destructuring
    const { text, setText, items, setItems } = props;

    // our change event handler function
    const handleChange = useCallback((event) => {
        setText(event.target.value);
    }, [setText]);

    // our submit event handler function
    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        if (!text.length) return;

        const newItem = {
            text: text
        };
        setItems([...items, newItem]);
        setText('');
    }, [items, setItems, text, setText]);

    return (
        <>
            <h4 style={{ marginBottom: '40px' }}>Todo Application</h4>
            <Form onSubmit={handleSubmit} autoComplete="45t135gqbetb">
                <Form.Group>
                    <Form.Control type="text" placeholder="What do we need to do?" onChange={handleChange} value={text} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add to List
                </Button>
            </Form>
        </>
    );
}

export default TodoForm;
