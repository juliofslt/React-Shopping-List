import {FaTimes, FaPencilAlt as Pencil} from 'react-icons/fa'

const Item = ( {item, onDelete, onToggle, openEditModal, editedId} ) => {
    return (
        <div className={`task ${item.important ? 'reminder' : ''}`} onDoubleClick={() => onToggle(item.id)}>
            <h3>
                {item.item}
                <div className='icons'>
                    <Pencil className='edit-icon' onClick={(e) => {
                        e.preventDefault()
                        openEditModal()
                        editedId(item.id)
                        }
                    } 
                        />
                    <FaTimes className='delete-icon' onClick={() => onDelete(item.id)} /> 
                </div>
            </h3>

            <p>{item.quantity}</p>
        </div>
    )
}

export default Item
