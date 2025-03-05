import React from 'react'
import styles from './page.module.css'
import Flags from './flags'

const footer = () => {
  return (
    <div className={`flex flex-row items-center justify-center`} dir='ltr'>
        <Flags />
        <h6 className={styles.footer}>&copy;ASHKANGOLZAD.IR | 2024-25</h6>
    </div>
  )
}

export default footer
