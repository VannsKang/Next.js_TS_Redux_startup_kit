import { HomepageCounter } from '@components/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '@store/store'
import { reset } from '@store/counter/counterActions'
/**
 * Homepage
 */
const ResetPage = () => {
  return (
    <main>
      <Link href={'/'}>
        <a>back</a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(reset)
  }
)

export default ResetPage
