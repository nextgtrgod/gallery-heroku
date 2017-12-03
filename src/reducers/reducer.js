
export const reducer = (state = [], action) => {
	let index, swapIndex, nextState;

	switch (action.type) {
		case 'DELETE_ITEM':
			index = state.findIndex(item => item.id === action.id);

			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];
		
		case 'MOVE_UP':
			nextState = state.slice();
			index = state.findIndex(item => item.id === action.id);
			swapIndex = (index - 1 < 0) ? (nextState.length - 1) : (index - 1);

			[nextState[index], nextState[swapIndex]] = [nextState[swapIndex], nextState[index]];

			return nextState;

		case 'MOVE_DOWN':
			nextState = state.slice();
			index = state.findIndex(item => item.id === action.id);
			swapIndex = (index + 1) % nextState.length;

			[nextState[index], nextState[swapIndex]] = [nextState[swapIndex], nextState[index]];

			return nextState;

		case 'SET_DATA':
			return action.data
	
		default:
			return state
	}
}