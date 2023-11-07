import { Button, Nav } from "./AuthNav.styled"

export const AuthNav = () => {

    return (
        <Nav>
            <Button to='/login'>Log In</Button>
            <Button to='/register'>Register</Button>
        </Nav>
    )
}