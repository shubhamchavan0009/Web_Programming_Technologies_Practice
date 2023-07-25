import React from 'react'
import Column from './Column'
import './Table.css'
import styles from './Table.module.css'

export default function Table() {
  return (
    // <React.Fragment> or <>
    <> 
        <table className='table table-bordered'>
            <tr>
                <Column></Column>
            </tr>
            <tr>
                <Column></Column>
            </tr>
        </table>
        <h3 className={styles.success}>Hello...React..!!</h3>
        <h2 className='error'>Error</h2>
    </>
    // </React.Fragment> or </>
  )
}
