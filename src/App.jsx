import { ThemeProvider } from 'styled-components'
import './App.css'
import { GlobalCss } from './styles/global'
import { colors } from './theme/colors'
import { CreateRoutes } from './routes'

function App() {


  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalCss/>
        <CreateRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
