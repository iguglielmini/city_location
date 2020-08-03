import React from 'react'
//scss
import './styles.scss';
import FadeIn from 'react-fade-in'
//icons
import { FiSearch, FiTrash } from 'react-icons/fi'
//Material Ui
import TextField from '@material-ui/core/TextField';

export default function SearchCity() {
    return (
        <FadeIn>
            <div className="content-search">
                <form>
                    <TextField id="filled-basic" label="Pesquisa Rápida" variant="outlined" />
                    <button type="button">
                        <FiSearch />
                    </button>
                    <button type="button" className="clear-btn">
                        <FiTrash />
                    </button>
                </form>
            </div>
        </FadeIn>
    )
}
