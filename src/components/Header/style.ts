import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
`

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 2%;
  gap: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['pink-light']};

  li {
    cursor: pointer;
  }
`
