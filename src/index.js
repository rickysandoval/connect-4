import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from "./components/App";
import reducer from './reducer';
import { makeMove, resetGame, startGame } from './actions';

const store = createStore(reducer)


const render = () => ReactDOM.render(
    <App
        gameState={store.getState()}
        onStartGame={(playerOneColor) => store.dispatch(startGame(playerOneColor))}
        onMakeMove={(column) => store.dispatch(makeMove(column))}
        onResetGame={() => store.dispatch(resetGame())}
    />,
    document.getElementById('root')
);

render();
store.subscribe(render);