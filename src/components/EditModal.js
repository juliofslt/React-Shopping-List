import { useState } from "react"

const EditModal = ( {closeEditModal, state, editItem} ) => {
    
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!item){
            alert('Please add a task')
            return
        }

        editItem( {item, quantity} )

        setItem('')
        setQuantity('')
    }

    return (
        <div className={`edit-modal ${state ? 'show-modal' : 'hide-modal'}`}>

            <h1>Edit item</h1>
            <form onSubmit={onSubmit} >
                <div className='form-control'>
                    <label>Item name</label>
                    <input type="text" value={item} onChange={ (e) => setItem(e.target.value) }/>
                </div>
                <div className='form-control'>
                    <label>Quantity</label>
                    <input type="text" value={quantity} onChange={ (e) => setQuantity(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="Make changes" className='btn'/>
                </div>
            </form>
            <div>
                <button className='btn' onClick={closeEditModal} >Cancel</button>
            </div>
                

        </div>
    )
}

export default EditModal
