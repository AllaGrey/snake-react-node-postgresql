import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations"
import { Menu, Button } from "./UserMenu.styled"

export const UserMenu = ({user}) => {

    const dispatch = useDispatch()

    return (
        <Menu>
            <p>Welcome, {user.name} </p>
            <Button type="button" onClick={()=>dispatch(logout())}>Log Out</Button>
        </Menu>
    )
}