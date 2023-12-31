import { Formik} from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';
import { RegisterSection, RegisterFormStyled, Label,Input } from './RegisterForm.styled';
import { Button } from '../LoginForm/LoginForm.styled';



export const RegisterForm = () => {
    
    const dispatch = useDispatch()

    const handleSubmit = (values, { resetForm }) => {
        dispatch(registration(values))
        resetForm()

    };
    
    return (
        <RegisterSection>
                    <Formik initialValues={{ name: '', email: '', password:'' }} onSubmit={handleSubmit}>
            <RegisterFormStyled>
                <Label>
                    Name
                    <Input
                        type='text'
                        name='name'
                        required />
                </Label>
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
                <Button type='submit'>Register</Button>
            </RegisterFormStyled>
        </Formik>
</RegisterSection>
    )
}