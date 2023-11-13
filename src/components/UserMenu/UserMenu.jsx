import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"
import { Menu, Button } from "./UserMenu.styled"
import PropTypes from 'prop-types';

export const UserMenu = ({user}) => {

    const dispatch = useDispatch()

    return (
        <Menu>
            <p>Welcome, {user.name} </p>
            <Button type="button" onClick={()=>dispatch(logout())}>Log Out</Button>
        </Menu>
    )
}

UserMenu.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
}