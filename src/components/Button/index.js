import { connect } from 'react-redux'
import ButtonComponent from './ButtonComponent'

import { incrementCounter } from '../../actions/'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(incrementCounter())
})

const Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonComponent)

export default Button