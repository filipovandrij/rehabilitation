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
import Articles from '../../pages/Articles/Articles'
import AllServices from '../../pages/AllServices/AllServices'
import FullNewsCard from '../../components/FullNewsCard/FullNewsCard'

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

    const [cardsOfArticles, setCardOfArtouse] = useState<string>('')

    const changeToArtrouse = (enterLink: string) => {
        setCardOfArtouse(enterLink)
    }

    const [cardOfServices, setCardOfServices] = useState<string>('')

    const changeToServices = (enterLink: string) => {
        setCardOfServices(enterLink)
    }

    const [newsCardId, setNewsCardId] = useState<number>()

    const newsId = (enterId: number) => {
        setNewsCardId(enterId)
    }

    console.log(newsCardId)

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                cardsOfArticles={cardsOfArticles}
                favoriteCardNews={favoriteCardNews}
                changeToServices={changeToServices}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            cardsOfArticles={cardsOfArticles}
                            changeToArtrouse={changeToArtrouse}
                        />
                    }
                />
                <Route path="about-us" element={<AboutUs />} />
                <Route
                    path="/news"
                    element={
                        <News
                            newsId={newsId}
                            removeProductToCart={removeProductToCart}
                            addProductToCart={addProductToCart}
                        />
                    }
                />
                <Route
                    path={`/fullcard${newsCardId}`}
                    element={<FullNewsCard newsCardId={newsCardId} />}
                />
                <Route
                    path="/favorite"
                    element={
                        <Favorite removeProductToCart={removeProductToCart} />
                    }
                />
                <Route path="/comments" element={<HistoriesOfPatients />} />
                <Route
                    path="/price"
                    element={<Price changeToArtrouse={changeToArtrouse} />}
                />

                <Route
                    path={cardsOfArticles}
                    element={<Articles cardsOfArticles={cardsOfArticles} />}
                />

                <Route
                    path="/allServices"
                    element={
                        <AllServices
                            cardsOfArticles={cardsOfArticles}
                            cardOfServices={cardOfServices}
                            changeToArtrouse={changeToArtrouse}
                        />
                    }
                />
                <Route
                    path={`/allServices${cardsOfArticles}`}
                    element={<Articles cardsOfArticles={cardsOfArticles} />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
