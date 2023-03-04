import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AboutUs from '../../pages/About/AboutUs'
import { Route, Routes } from 'react-router-dom'
import News from '../../pages/News/News'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="about-us" element={<AboutUs />}></Route>
                <Route path="/news" element={<News />}></Route>
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
