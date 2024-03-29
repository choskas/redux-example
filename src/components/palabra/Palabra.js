import React from 'react'
import { connect } from 'react-redux'
import { selectActiveWord } from '../../store/palabra/reducer'


const Palabra = ({palabra}) => (
<div>{palabra}</div>
)

const mapStateToProps = (state) =>{
    return {
        palabra: selectActiveWord(state)
    }
}

export default connect(mapStateToProps)(Palabra)