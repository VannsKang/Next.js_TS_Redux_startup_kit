import Link from 'next/link'
import s from '@styles/main.styles'

const HomePage = () => {
  return (
    <main>
      <s.Title>Hello, world!</s.Title>
      <Link href={'/counter'}>
        <a>redux counter</a>
      </Link>
    </main>
  )
}

export default HomePage
