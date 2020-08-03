import React from 'react'
// SCSS
import './styles.scss'
// components 
import Header from '../../components/Header'
import SearchCity from '../../components/SearchCity'
import CardCity from '../../components/CardCity'

export default function Home() {
    return (
        <div className="container">
            <Header />
            <SearchCity />
            <div className="content">
                <CardCity />
            </div>
        </div>
    )
}
