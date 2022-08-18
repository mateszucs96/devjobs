import React from 'react'
import styles from './card.module.scss'

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
            <h2>{data.position}</h2>
            <p>{data.company}</p>
            <p>{data.location}</p>
        </div>
    )
}

export default Card