import React from 'react'

import { Icon } from '@common/icon/Icon'
import { Button } from '@material-ui/core'

import styles from './counter.module.scss'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

export const Counter: React.FC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <div className={styles.counter}>
      <h2>Count: {count}</h2>
      <Button color="secondary" onClick={onAdd}>
        <Icon name={'plus'} /> Add
      </Button>
      <Button color="inherit" onClick={onRemove}>
        <Icon name={'minus'} /> Remove
      </Button>
    </div>
  )
}
