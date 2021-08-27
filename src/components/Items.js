import Item from './Item'

const Items = ( {items, onDelete, onToggle, openEditModal, editedId} ) => {

    return (
        <div className='tasks-wrapper'>
         {items.map( (item) => (
		 	<Item key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} openEditModal={openEditModal} editedId={editedId} />
		 ))}
        </div>
    )
}

export default Items


