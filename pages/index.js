import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getPracticeData } from '../lib/practice'
import Link from 'next/link'
import Date from '../components/date'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import rootReducer from './reducers'
import store from "../store/store.js"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allPracticeData = getPracticeData()
  return {
    props: {
      allPostsData,
      allPracticeData
    }
  }
}

export default function Home({ allPostsData, allPracticeData }) {
  // const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>サンプルページ</h2>
          <ul>
            {allPracticeData.map(({ id }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/practice/${id}`}>
                  <a>{id}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </Provider>
  )
}