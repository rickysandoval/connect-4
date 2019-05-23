import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from "./components/App";
import reducer from './reducer';
import { makeMove, resetGame } from './actions';


const store = createStore(reducer)


const render = () => ReactDOM.render(
    <App
        gameState={store.getState()}
        onStartGame={(playerOneColor) => store.dispatch(startGame(playerOneColor))}
        onMakeMove={(player, column, row) => store.dispatch(makeMove(player, column, row))}
        onResetGame={() => store.dispatch(resetGame())}
    />,
    document.getElementById('root')
);

render();
store.subscribe(render);