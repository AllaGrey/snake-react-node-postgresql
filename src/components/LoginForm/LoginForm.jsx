import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { LoginSection, LoginFormStyled, Label, Input } from './LoginForm.styled';
import { Button } from './LoginForm.styled';

export const LoginForm = () => {

    const dispatch = useDispatch()

        const handleSubmit = (values, { resetForm }) => {
            dispatch(login(values))

        resetForm()
    };
    return (
        <LoginSection>
            <Formik initialValues={{ email: '', password:'' }} onSubmit={handleSubmit}>
            <LoginFormStyled>
                <Label>
                    Email
                    <Input
                        type='email'
                        name='email'
                        required />
                </Label>
                <Label>
                    Password
                    <Input
                        type='password'
                        name='password'
                        required />
                </Label>
                <Button type='submit'>Log In</Button>
            </LoginFormStyled>
        </Formik>
        </LoginSection>
    )
}