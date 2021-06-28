import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('reservation')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SkyX Airline</title>
        <meta name="description" content="SkyX Airline Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SkyX Airlines!
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Search reservation</h2>
            <form>
              <fieldset>
                <label>
                  Code:
                  <input type="text" />
                </label>
                <label>
                  Lastname:
                  <input type="text" />
                </label>
              </fieldset>
              <button onClick={handleClick}>Search</button>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
