import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ( { title, onAdd, toggleButton } ) => {

    const location = useLocation()

    return (
        <header>
            <h1 className='header' >
                {title}
                {location.pathname === '/' && <Button onClick={onAdd} 
                color={toggleButton ? 'red' : 'green'} 
                text={toggleButton ? 'close' : 'Add Item'} />}
            </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
