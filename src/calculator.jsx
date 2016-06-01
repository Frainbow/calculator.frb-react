import React from 'react'
import DigitBtn from './button/digit_btn.jsx'
import OperatorBtn from './button/operator_btn.jsx'
import FuncBtn from './button/func_btn.jsx'

class Output extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: 0,
      value: 0
    }
  }

  render() {

    let className = "btn btn-default btn-lg disabled col-xs-" + this.props.col

    return (
      <div className={className}>
        <div className="text-right">{this.state.text}</div>
      </div>
    )
  }
}

Output.propTypes = { col: React.PropTypes.number }
Output.defaultProps = { col: 12 }

class Calculator extends React.Component {

  render() {

    let style = { maxWidth: '50vh' }

    return (
      <div className="container" style={style}>
        <div className="row">
          <Output col={12} />
        </div>
        <div className="row">
          <FuncBtn col={3} func="AC" />
          <FuncBtn col={3} func="+/−" />
          <FuncBtn col={3} func="%" />
          <OperatorBtn col={3} operator="÷" />
        </div>
        <div className="row">
          <DigitBtn col={3} digit="7" />
          <DigitBtn col={3} digit="8" />
          <DigitBtn col={3} digit="9" />
          <OperatorBtn col={3} operator="×" />
        </div>
        <div className="row">
          <DigitBtn col={3} digit="4" />
          <DigitBtn col={3} digit="5" />
          <DigitBtn col={3} digit="6" />
          <OperatorBtn col={3} operator="−" />
        </div>
        <div className="row">
          <DigitBtn col={3} digit="1" />
          <DigitBtn col={3} digit="2" />
          <DigitBtn col={3} digit="3" />
          <OperatorBtn col={3} operator="+" />
        </div>
        <div className="row">
          <DigitBtn col={6} digit="0" />
          <DigitBtn col={3} digit="." />
          <OperatorBtn col={3} operator="=" />
        </div>
      </div>
    )
  }
}

export default Calculator
