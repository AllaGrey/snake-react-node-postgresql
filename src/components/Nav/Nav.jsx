import { useAuth } from "../../hooks/useAuth"
import { StyledNav, NavLinkStyled } from "./Nav.styled"

export const Nav = () => {
    const { isLoggedIn } = useAuth()
    
    return (
        <StyledNav>
            <NavLinkStyled to='/'>Home</NavLinkStyled>
            {isLoggedIn && <NavLinkStyled to='/game'>Game</NavLinkStyled>}
        </StyledNav>
    )
}