import React, { useState } from 'react';
import TodoList from './components/TodoList.component';
import TodoForm from './components/TodoForm.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todo = () => {
  // The useState hook. Creating a getter and setter using array destructuring
  // The useState hook argument is the default value
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  return (
    <>
      <Container style={{ marginTop: '60px' }}>
        <Row>
          <Col>
            <TodoForm text={text} setText={setText} items={items} setItems={setItems} />
          </Col>
          <Col>
            <TodoList items={items} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Todo;
