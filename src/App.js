import { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// Importing components
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'
import Footer from './components/Footer'
import About from './components/About'
import Button from './components/Button'
import EditModal from './components/EditModal'

const App = () => {

	// Show form state
	const [showForm, setShowForm] = useState(false)

	// Items state
	const [items, setItems] = useState([{item: "Onions", quantity: '3', important: true, id:1}])

	// Show edit modal state
	const [editModal, setEditModal] = useState(false)

	// Edited Item ID state
	const [editedId, setEditedId] = useState(0)

	// Show item edit modal
	const toggleEditModal = () => {
		setEditModal(!editModal)
	}

	// Add Item 
	const addItem = (item) => {
		try{
			const id = items[items.length - 1].id + 1
			const newItem = {...item, id}
			setItems([...items, newItem])
		}
		catch{
			const id = items.length + 1
			const newItem = {...item, id}
			setItems([...items, newItem])
		}
	}

	// Edit editedId state
	const editItemIdState = (id) => {
		setEditedId(id) 
	}

	// Edit Item
	const editItem = (editedTask) => {
		setItems( items.map( item => {
			if(item.id === editedId){
				setEditedId(0)
				return {...item, item: editedTask.item, quantity: editedTask.quantity}
			}
			else{
				return item
			}
		}))
		toggleEditModal()
	}
	
	// Delete Item
	const deleteItem = (id) => {
		setItems( items.filter( item => item.id !== id) )
	}

	// Delete all items
	const deleteAll = () => {
		if(items.length === 0){
			return window.alert("Shopping list already empty")
		}
		const deleteItems = window.confirm("Are you sure you want to delete all items?")
		deleteItems === true ? setItems([]) : window.alert("Your items are safe")
	}

	// Toggle reminder
	const toggleReminder =  (id) => {
		setItems( items.map( item => item.id === id ? {...item, important: !item.important} : item) )
	}

	// Toggle show form
	const toggleForm = () => {
		setShowForm(!showForm)
	}



	return (
	<Router>
		<div className="container"  >

			<EditModal closeEditModal={toggleEditModal} state={editModal} editItem={editItem} />
			<Header onAdd={toggleForm} toggleButton={showForm} title='Shopping List'/>
			<Route path='/' exact render={ (props) => (
					<>
						{/* Show form if `showForm` is `true` */}
						{ showForm ? <AddItem onAdd={addItem} /> : ''}
						{items.length > 0 ? 
						<Items items={items} onDelete={deleteItem} onToggle={toggleReminder} openEditModal={toggleEditModal} editedId={editItemIdState}  />
						:
						<p> No Items To Show </p>}
						<Button color='#db3e00' text='Remove All' onClick={deleteAll}/>
					</>
				)} 
			/>

			<Route path='/about' component={About} onClick={deleteAll}/>
			<Footer />

		</div>
	</Router>
	);
}

export default App;
