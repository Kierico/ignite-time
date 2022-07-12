import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'

import kiericoLogo from '../../assets/logo.png'

export function Header() {
    return (
        <HeaderContainer>
            <img src={kiericoLogo} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
