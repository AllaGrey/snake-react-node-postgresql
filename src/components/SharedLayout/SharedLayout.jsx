import { AppBar } from '../AppBar/AppBar';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';


export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Main>
                <AppRoutes />
            </Main>
        </>
    );
};