
export const setData = data => {
	return {
		type: 'SET_DATA',
		data
	}
}

export const deleteItem = id => {
	return {
		type: 'DELETE_ITEM',
		id
	}
}

export const moveUp = id => {
	return {
		type: 'MOVE_UP',
		id
	}
}

export const moveDown = id => {
	return {
		type: 'MOVE_DOWN',
		id
	}
}