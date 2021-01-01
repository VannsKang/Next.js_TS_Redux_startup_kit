import { increment, decrement } from '@store/counter/counterActions'
import { Counter } from '@components/counter/Counter'
import { AppState } from '@store/store'
import { useCallback } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export const HomepageCounter = () => {
  const count = useSelector(
    ({ counterReducer }: AppState) => counterReducer.count,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()
  const add = useCallback(() => dispatch(increment), [dispatch])
  const remove = useCallback(() => dispatch(decrement), [dispatch])

  return <Counter count={count} add={add} remove={remove} />
}
