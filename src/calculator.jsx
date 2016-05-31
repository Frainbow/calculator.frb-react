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
    return (
      <div className="btn btn-default btn-lg disabled col-xs-4">
        <div className="text-right">{this.state.text}</div>
      </div>
    )
  }
}

class Calculator extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <Output />
        </div>
        <div className="row">
          <FuncBtn func="AC" />
          <FuncBtn func="+/−" />
          <FuncBtn func="%" />
          <OperatorBtn operator="÷" />
        </div>
        <div className="row">
          <DigitBtn digit="7" />
          <DigitBtn digit="8" />
          <DigitBtn digit="9" />
          <OperatorBtn operator="×" />
        </div>
        <div className="row">
          <DigitBtn digit="4" />
          <DigitBtn digit="5" />
          <DigitBtn digit="6" />
          <OperatorBtn operator="−" />
        </div>
        <div className="row">
          <DigitBtn digit="1" />
          <DigitBtn digit="2" />
          <DigitBtn digit="3" />
          <OperatorBtn operator="+" />
        </div>
        <div className="row">
          <DigitBtn col={2} digit="0" />
          <DigitBtn digit="." />
          <OperatorBtn operator="=" />
        </div>
      </div>
    )
  }
}

export default Calculator
