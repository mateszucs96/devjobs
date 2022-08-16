import React from 'react'
import styles from './card.module.scss'

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <h1>{data.company}</h1>
            <h2>{data.contract}</h2>
            <h3>{data.location}</h3>
        </div>
    )
}

export default Card