import { AppBar } from '../AppBar/AppBar';
import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';
import { Background } from '../Background/Background';


export const SharedLayout = () => {
    return (
        <>
            <Background />
            <AppBar />
            <Main>
                <AppRoutes />
            </Main>
        </>
    );
};