import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

let store = createStore(reducer);


import app from './styles/app.styl';

import makeRequest from './modules/makeRequest';
import { setData } from './actions/index';

import ListContainer from './containers/ListContainer';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	async getData() {
		try {
			let res = await fetch('/api/getData', { method: 'GET' });
			let json = await res.json();

			if (json.status === 'success') { store.dispatch(setData( json.data.images )) }
			else { console.log(res.message) }

		} catch (error) {
			console.log(error);
		};
	}

	componentDidMount() {
		this.getData();

		document.body.classList.add('loaded');
	}

	render() {
		return (
			<Provider store={store}>
				<ListContainer />
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));