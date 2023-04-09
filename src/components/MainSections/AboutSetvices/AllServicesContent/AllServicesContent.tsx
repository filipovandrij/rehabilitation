import { Button, Container } from '@mui/material'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from '../../../Slider/Slider'
import './AllServicesContent.scss'

type Props = {
    changeToArtrouse: (enterLink: string) => void
    id: number
    description: string
    imgSrc: string
    title: string
    link1: string
    link2: string
    link3: string
    link4: string
    link5: string
}
const AllServicesContent = ({
    changeToArtrouse,
    description,
    imgSrc,
    title,
    link1,
    link2,
    link3,
    link4,
    link5,
}: Props) => {
    const [showText, setShowText] = useState<string>('link-box-hide')

    return (
        <Container maxWidth="xl" className="main-section">
            <div className="title-box">
                <div className="title-description">
                    <h3>{title}</h3>
                    <p>
                        {title}
                        {description}
                    </p>
                </div>
                <div className="img-title">
                    <img className="img-title" src={imgSrc} alt="" />
                </div>
            </div>
            <Button
                variant="contained"
                onClick={() => {
                    setShowText('link-box-show')
                }}
            >
                See More
            </Button>

            <div className={showText}>
                <NavLink to="/article" onClick={() => changeToArtrouse(link1)}>
                    {link1}
                </NavLink>

                <NavLink to="/article" onClick={() => changeToArtrouse(link2)}>
                    {link2}
                </NavLink>

                <NavLink to="/article" onClick={() => changeToArtrouse(link3)}>
                    {link3}
                </NavLink>

                <NavLink to="/article" onClick={() => changeToArtrouse(link4)}>
                    {link4}
                </NavLink>

                <NavLink to="/article" onClick={() => changeToArtrouse(link5)}>
                    {link5}
                </NavLink>
            </div>
        </Container>
    )
}
export default AllServicesContent
