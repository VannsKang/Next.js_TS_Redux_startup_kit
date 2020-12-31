import { increment, decrement } from '@store/counter/counterActions'
import { Counter } from '@components/counter/Counter'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ counterReducer }: AppState) => ({
  count: counterReducer.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

export const HomepageCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
