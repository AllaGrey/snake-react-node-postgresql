import { useAuth } from "../../hooks/useAuth";
import { Nav } from "../Nav/Nav";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLoggedIn, user } = useAuth()

    return (
        <Header>
            <Nav />
            {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
        </Header>
    )
}