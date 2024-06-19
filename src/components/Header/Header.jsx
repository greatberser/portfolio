import Container from '../Container/Container'
import Logo from '../Logo/Logo';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <Container className={s.flex}>
            <Logo/>
            <ul className={s.navMenu}>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </ul>
            </Container>
        </header>
    );
};

export default Header;