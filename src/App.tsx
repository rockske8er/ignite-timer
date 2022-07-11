import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { CSSBoot } from './styles/boot'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <CSSBoot />
    </ThemeProvider>
  )
}

export { App }
