import React from 'react';

import Button from './Button';


const List = ({ data, onDelete, onMoveDown, onMoveUp }) => (
	<ul className='list'>
		{data.map(item => 
			<li key={item.id} className='list__item'>
				<div
					className='preview'
					style={{
						backgroundImage: `url(${item.small})`
					}}
				/>
				<div className='menu'>
					<Button type='down' onClick={() => onMoveDown(item.id)} />
					<Button type='up' onClick={() => onMoveUp(item.id)} />
					<Button type='delete' onClick={() => onDelete(item.id)} />
				</div>
			</li>
		)}
	</ul>
)

export default List;