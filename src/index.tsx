import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, ThunkAction } from 'redux';
import thunk from 'redux-thunk';
import {State} from './reducers/state';
import {Marvels} from './marvels';

const store = createStore(
    applyMiddleware(thunk)
);

type ThunkAction2<R> = ThunkAction<R, State, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;

ReactDOM.render(
    <Provider store={store}>
        <Marvels title="Liste des supers héros:"/>
    </Provider>,
    document.getElementById('app')
);