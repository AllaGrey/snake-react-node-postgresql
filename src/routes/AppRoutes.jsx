import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const GamePage = lazy(() => import('../pages/GamePage/GamePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                
                <Route path='/' element={<HomePage />} />
                        
                <Route
                    path="/register"
                    element={
                        <PublicRoute redirectTo="/game" component={<RegisterPage />} />
                    }
                />
                        
                <Route
                    path="/login"
                    element={
                        <PublicRoute redirectTo="/game" component={<LoginPage />} />
                    }
                />   
                        
                <Route
                    path="/game"
                    element={
                        <PrivateRoute redirectTo="/login" component={<GamePage />} />
                    }
                />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
