import styled from 'styled-components'

export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['pink-normal']};
  border: none;
  border-radius: 8px;
`
