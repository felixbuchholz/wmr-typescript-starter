import { FunctionComponent } from 'preact'

import styles from './style.module.css'

const Home: FunctionComponent = () => {
  return (
    <>
      <section class={styles.home}>
        <h1>WMR TypeScript Starter</h1>
        <ul>
          <li>Minimal TypeScript Starter</li>
          <li>
            Based on:{' '}
            <a href="https://wmr.dev/docs" target="_blank">
              yarn create wmr project-name
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home
