// LINK styles
import styles from './counter.module.scss'

// LINK Material UI
import { Button } from '@material-ui/core'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded'

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
        <AddCircleOutlineRoundedIcon color="secondary" />
        Add
      </Button>
      <Button color="inherit" onClick={onRemove}>
        <RemoveCircleOutlineRoundedIcon color="inherit" />
        Remove
      </Button>
    </div>
  )
}
