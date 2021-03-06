import React, { Component } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodosList from './TodosList';
import TodoFooter from './TodoFooter';

const App = styled.div`
  width: 480px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 72px;
  letter-spacing: 5px;
  font-weight: lighter;
  text-align: center;
  color: #E4002B;
  margin: 20px 0;
  opacity: .7;
`;

class TodoApp extends Component {
  render() {
    return (
      <App className="app">
        <header className="app-header">
          <Title className="app-title">todos</Title>
          <TodoInput/>
        </header>
        <TodosList/>
        <TodoFooter/>
      </App>
    );
  }
}

export default TodoApp;
