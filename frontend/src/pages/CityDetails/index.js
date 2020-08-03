import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
//icons
import { FiArrowLeft } from 'react-icons/fi'
//scss
import './styles.scss'
//component
import CardPeople from '../../components/CardPeople'

export default function CityDetails() {
    return (
        <FadeIn>
            <div className="container-city">
                <div className="header-city">
                    <div>
                        <Link to="/">
                            <FiArrowLeft />
                    Voltar
                    </Link>
                    </div>
                    <h1>Pernambunco</h1>
                </div>
                <CardPeople />

            </div>
        </FadeIn>
    )
}
