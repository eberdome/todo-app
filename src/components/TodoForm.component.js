import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TodoForm = (props) => {

    // object destructuring
    const { text, setText, items, setItems } = props;

    // our change handler function
    const handleChange = (event) => {
        setText(event.target.value);
    }

    // our submit handler function
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.length) {
            return;
        }
        const newItem = {
            text: text
        };
        setItems([...items, newItem]);
        setText('');
    }

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
