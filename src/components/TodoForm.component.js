import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const TodoForm = (props) => {

    // handle our change event
    const handleChange = (e) => {
        props.setText(e.target.value);
    }

    // This will run when we click the "Add Item" button
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.text.length) {
            return;
        }
        const newItem = {
            text: props.text
        };
        props.setItems(props.items.concat(newItem));
        props.setText('');
    }

    // object destructuring so we dont have to prepend "props" all the time
    // writing {items} is quicker than {props.items}
    const { text } = props;

    return (
        <div>
            <h3 style={{ marginBottom: '40px' }}>Thanksgiving Dinner List</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="new-todo">
                    <Form.Control type="text" placeholder="What do we need?" id="new-todo" onChange={handleChange} value={text} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
}

export default TodoForm;
