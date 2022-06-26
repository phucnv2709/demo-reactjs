import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            name: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            name: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            name: 'Code',
            status: 'new'
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, index) => {
        //clone current array to new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status : newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={ handleTodoClick }/>
        </div>
    );
}

export default TodoFeature;