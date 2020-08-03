import React from 'react'
import FadeIn from 'react-fade-in'
//scss
import './styles.scss'
// Material UI
import Avatar from '@material-ui/core/Avatar'
//Images
import Places from '../../assets/places.svg'
import Peoples from '../../assets/peoples.svg'

export default function Header() {
    return (
        <FadeIn>
            <div className="header">
                <div className="avatar">
                    <Avatar src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Ítalo guglielmini" />
                    <p>
                        <strong>Ítalo Guglielmini</strong>
                        <span>italo.guglielmini@gmail.com</span>
                    </p>
                </div>
                <div>
                    <div className="card-dados">
                        <img src={Places} alt="City" />
                        <div>
                            <h3>10</h3>
                            <p>Cidades</p>
                        </div>
                    </div>
                    <div className="card-dados">
                        <img src={Peoples} alt="People" />
                        <div>
                            <h3>10</h3>
                            <p>Pessoas</p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
