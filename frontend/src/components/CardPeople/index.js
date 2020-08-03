import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'

//scss 
import './styles.scss'
//icons
import { FiEye } from 'react-icons/fi'
//scss
import './styles.scss'
//Images
import Peoples from '../../assets/peoples.svg'

export default function CardPeople() {
    return (
        <FadeIn>
            <div className="card-content">
                    <div className="card-dados">
                        <div>
                            <img src={Peoples} alt="People" />
                            <div>
                                <h3>ítalo Guglielmini</h3>
                                <p>italo.guglielmini@gmail.com</p>
                            </div>
                        </div>
                        <Link to="/persondetails">
                            <FiEye />
                        </Link>
                    </div>

                    <div className="card-dados">
                        <div>
                            <img src={Peoples} alt="People" />
                            <div>
                                <h3>ítalo Guglielmini</h3>
                                <p>italo.guglielmini@gmail.com</p>
                            </div>
                        </div>
                        <Link to="/persondetails">
                            <FiEye />
                        </Link>
                    </div>

                    <div className="card-dados">
                        <div>
                            <img src={Peoples} alt="People" />
                            <div>
                                <h3>ítalo Guglielmini</h3>
                                <p>italo.guglielmini@gmail.com</p>
                            </div>
                        </div>
                        <Link to="/persondetails">
                            <FiEye />
                        </Link>
                    </div>

                    <div className="card-dados">
                        <div>
                            <img src={Peoples} alt="People" />
                            <div>
                                <h3>ítalo Guglielmini</h3>
                                <p>italo.guglielmini@gmail.com</p>
                            </div>
                        </div>
                        <Link to="/persondetails">
                            <FiEye />
                        </Link>
                    </div>

                    <div className="card-dados">
                        <div>
                            <img src={Peoples} alt="People" />
                            <div>
                                <h3>ítalo Guglielmini</h3>
                                <p>italo.guglielmini@gmail.com</p>
                            </div>
                        </div>
                        <Link to="/persondetails">
                            <FiEye />
                        </Link>
                    </div>
                </div>
        </FadeIn>

    )
}
