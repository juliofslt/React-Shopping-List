import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Made by <a href='https://github.com/juliofslt'>juliofslt</a> </p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
