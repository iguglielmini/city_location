import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'

//scss 
import './styles.scss'
//icons 
import { FiMap } from 'react-icons/fi'

export default function CardCity() {
    return (
        <FadeIn>
            <div className="container-card">

                <Link to="/citydetails" className="">
                    <div className="card-city">
                        <FiMap />
                        <div>
                            <h3>Pernambunco</h3>
                            <span>
                                Pessoas Registrada
                            </span>
                        </div>
                        <h3>9</h3>
                    </div>
                </Link>

            </div>
        </FadeIn>

    )
}
