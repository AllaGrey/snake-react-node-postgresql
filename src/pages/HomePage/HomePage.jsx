import { Section, StyledLink } from "./HomePage.styled"

export default function HomePage () {

    return (
        <Section>
            <h1>Are you ready to challenge the snake?</h1>
            <StyledLink to={'/login'}>Yes, I already have a registration</StyledLink>
            <StyledLink to={'/register'}>No, I want to register now</StyledLink>
        </Section>
    )
}