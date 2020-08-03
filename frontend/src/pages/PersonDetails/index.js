import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
//icons
import { FiArrowLeft } from 'react-icons/fi'
// Material UI
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField';
//scss
import './styles.scss'
//component
import Maps from '../../components/Maps'

export default function PersonDetails() {
    return (
        <FadeIn>
            <div className="container-city">
                <div className="header-city">
                    <div>
                        <Link to="/citydetails">
                            <FiArrowLeft />
                Voltar
                </Link>
                    </div>
                    <h1>Ítalo Guglielmini</h1>
                </div>

                <div className="content-person">
                    <div className="avatar-person">
                        <Avatar
                            src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                            alt="Ítalo guglielmini"
                        />
                    </div>
                    <div className="dados-person">
                            <TextField
                                id="outlined-basic"
                                label="Primeiro nome"
                                defaultValue="Ítalo"
                                variant="outlined"
                                disabled />
                            <TextField
                                id="outlined-basic"
                                label="Sobrenome"
                                defaultValue="Guglielmini"
                                variant="outlined"
                                disabled />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            defaultValue="italo.guglielmini@gmail.com"
                            variant="outlined"
                            disabled />
                            <TextField
                                id="outlined-basic"
                                label="Sexo"
                                defaultValue="Masculino"
                                variant="outlined"
                                disabled />
                            <TextField
                                id="outlined-basic"
                                label="Company"
                                defaultValue="Accenture"
                                variant="outlined"
                                disabled />
                        <TextField
                            id="outlined-basic"
                            label="Cidade"
                            defaultValue="Mittenlane, TX"
                            variant="outlined"
                            disabled />
                        <TextField
                            id="outlined-basic"
                            label="Título"
                            defaultValue="Software Engineer"
                            variant="outlined"
                            disabled />
                    </div>
                    <div className="location-user">
                        <Maps/>
                    </div>
                </div>

            </div>
        </FadeIn>
    )
}
