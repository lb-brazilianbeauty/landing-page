import { ButtonStyle } from './style'
import { ButtonProps } from './type'

const Button = ({ onClick, title }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{title}</ButtonStyle>
}

export default Button
