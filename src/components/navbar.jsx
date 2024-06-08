import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return <Menu fixed="top" size="huge" inverted color="olive">
        
        <Menu.Item as={Link} to="/" style={{fontSize: "1.5rem"}}>
            Home
        </Menu.Item>

        <Menu.Item as={Link} to="/rated" style={{fontSize: "1.5rem"}}>
            Rated
        </Menu.Item>

        <Menu.Item as={Link} to="/friends" style={{fontSize: "1.5rem"}}>
            Friends
        </Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item as={Link} to="/auth" style={{fontSize: "1.5rem"}}>
                
                Auth
            </Menu.Item>
        </Menu.Menu>
    </Menu>
}