import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/theme'
import { GlobalStyle } from './styles/global'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
