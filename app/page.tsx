import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomePage from './pages/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        <HomePage/>
      </h1>
    </main>
  )
}
