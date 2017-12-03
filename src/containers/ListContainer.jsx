import { connect } from 'react-redux';

import { deleteItem, moveDown, moveUp } from '../actions';
import { reducer } from '../reducers/reducer';

import List from '../components/List';


const mapStateToProps = state => {
	return {
		data: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDelete: id => dispatch(deleteItem(id)),
		onMoveDown: id => dispatch(moveDown(id)),
		onMoveUp: id => dispatch(moveUp(id))
	}
}

const ListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ListContainer;