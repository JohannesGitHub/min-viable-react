import { connect } from 'react-redux'
import CounterComponent from './CounterComponent'

const mapStateToProps = state => ({
  counter: state.app.counter
})

const mapDispatchToProps = dispatch => ({})

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent)

export default Counter
