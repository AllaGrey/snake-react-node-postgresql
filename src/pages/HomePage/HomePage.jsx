import { Section, StyledLink, Title } from "./HomePage.styled"

export default function HomePage () {

    return (
        <Section>
            <Title>Are you ready to challenge the snake?</Title>
            <StyledLink to={'/login'}>Yes, I already have a registration</StyledLink>
            <StyledLink to={'/register'}>No, I want to register now</StyledLink>
        </Section>
    )
}