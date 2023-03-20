import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AboutUs from '../../pages/About/AboutUs'
import { Route, Routes } from 'react-router-dom'
import News from '../../pages/News/News'
import Favorite from '../../pages/Favorite/Favorite'
import HistoriesOfPatients from '../../pages/HistoriesOfPatients/HistoriesOfPatients'
import { useState } from 'react'
import Price from '../../pages/Price/Price'

type Props = {}
type FavoriteCardNews = {
    [id: number]: number
}

const App = (props: Props) => {
    const [favoriteCardNews, setProductsIncart] = useState<FavoriteCardNews>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsIncart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductToCart = (id: number, count: number) => {
        setProductsIncart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) - count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header favoriteCardNews={favoriteCardNews} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route
                    path="/news"
                    element={
                        <News
                            removeProductToCart={removeProductToCart}
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route
                    path="/favorite"
                    element={
                        <Favorite removeProductToCart={removeProductToCart} />
                    }
                />
                <Route path="/comments" element={<HistoriesOfPatients />} />
                <Route path="/price" element={<Price />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
