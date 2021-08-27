import PropTypes from 'prop-types'

const Button = ( {color, text, onClick} ) => {
	return (
    	<button onClick={onClick} className='btn' style={{backgroundColor: color}} >
			{text}
		</button>
    )
}

// Default properties
Button.defaultProps = {
	text: 'Add',
	color: 'steelblue'
}

// Property types
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func
}

export default Button




