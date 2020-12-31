import { HomepageCounter } from '@components/counter/HomepageCounter'
import Link from 'next/link'
import s from '@styles/main.styles'

const CounterNumber = () => {
  return (
    <main>
      <s.Title>Hello, world!</s.Title>
      <Link href={'/'}>
        <a>back to main</a>
      </Link>
      <hr />
      <Link href={'/reset'}>
        <a>reset page</a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export default CounterNumber
