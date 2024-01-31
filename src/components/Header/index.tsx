import Button from '../Button'
import { HeaderContainer, NavBar } from './style'
const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        {/* Imagem aqui */}
        <li>Sobre mi</li>
        <li>Tratamientos</li>
        <li>Contacto</li>
        <Button title="CITA ONLINE" />
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
