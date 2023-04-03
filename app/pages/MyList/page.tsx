import React from 'react'
import styles from "../../page.module.css";
import MyListPageComponent from './MyListPage';


const MyListPage = () => {
  return (
    <div className={styles.main}>
      <MyListPageComponent/>
    </div>
  )
}

export default MyListPage