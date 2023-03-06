import { FC, useCallback, useState } from 'react'
import { Props } from './types'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaDiscord, FaBars, FaUserAlt } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GoSync } from 'react-icons/go';
import { BiCategory } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, ButtonLogo } from './styles'
import { syncCharacters, syncLocations, syncEpisodes } from '../../services/api';



const Navbar: FC<Props> = ({ type = 'list' }) => {
    const location = useLocation();
    const isLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/";

    const profile = isLoginOrSignUp ? "Login" : "Profile";
    const showProfileButton = location.pathname !== "/profile";

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const navigate = useNavigate()

    const handleBackCategories = useCallback(() => {
        navigate('/categories')
    }, [navigate])

    const handleGoToProfile = useCallback(() => {
        navigate("/profile");
      }, [navigate]);

    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/welcome')
    }, [navigate])

    const handleSynchApi = async () => {
        for (let pageCount = 0; pageCount < 42; pageCount++) {
            await syncCharacters(pageCount)
        }
        for (let pageCount = 0; pageCount < 7; pageCount++) {
            await syncLocations(pageCount)
        }
        for (let pageCount = 0; pageCount < 3; pageCount++) {
            await syncEpisodes(pageCount)
        }
    }

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <ButtonLogo onClick={handleBackCategories}><FaDiscord /></ButtonLogo>
                        <p>Rick and Morty</p>
                    </LogoContainer>
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaBars />
                    </MobileIcon>
                    
                    <Menu $open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={handleLogout}><RiLogoutBoxLine/>Logout</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleSynchApi}><GoSync/>Synch Api</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleBackCategories}><BiCategory/>Categories </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleGoToProfile}> <FaUserAlt/>Profile </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar