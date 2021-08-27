import {useState} from 'react'

const AddItem = ( {onAdd} ) => {

    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!item){
            alert('Please add a task')
            return
        }

        onAdd( {item, quantity, important} )

        setItem('')
        setQuantity('')
        setImportant(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >

            <div className='form-control'>
                <label>Item</label>
                <input type='text' placeholder='Add Item' value={item}
                onChange={ (e) => setItem(e.target.value) } />
            </div>

            <div className='form-control'>
                <label>Quantity</label>
                <input type='text' placeholder='Quantity' value={quantity}
                onChange={ (e) => setQuantity(e.target.value) } />
            </div>
            
            <div className='form-control form-control-check'>
                <label>Important Item</label>
                <input type='checkbox' value={important} checked={important}
                onChange={ (e) => setImportant(e.currentTarget.checked) }/>
            </div>

            <input type="submit" value="Save Item" className='btn btn-block'/>
        </form>
    )
}

export default AddItem
