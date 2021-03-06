import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, Middleware, ThunkAction} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory, Route, Router} from 'react-router';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {State} from './reducers/state';
import {reducer} from './reducers/index';
import {Marvels} from './components/marvels';
import {NotFound} from './not-found';
import {MarvelDetail} from './components/marvel-detail';

let middlewares: Middleware[] = [routerMiddleware(browserHistory), thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));
const history = syncHistoryWithStore(browserHistory, store);

type ThunkAction2<R> = ThunkAction<R, State, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="marvels" component={() => <Marvels title="Liste des super héros"/>}/>
            <Route path="marvels/:id" component={MarvelDetail}/>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);