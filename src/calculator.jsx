import React from 'react'
import DigitBtn from './button/digit_btn.jsx'
import OperatorBtn from './button/operator_btn.jsx'
import FuncBtn from './button/func_btn.jsx'

class Output extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let className = "btn btn-default btn-lg disabled col-xs-" + this.props.col
    let textStyle = { textOverflow: 'ellipsis', overflow: 'hidden' }

    return (
      <div className={className}>
        <div className="text-right" style={textStyle} title={this.props.value}>
          {this.props.value}
        </div>
      </div>
    )
  }
}

Output.propTypes = {
  col: React.PropTypes.number,
  value: React.PropTypes.string.isRequired
}

Output.defaultProps = {
  col: 12,
  value: ""
}

class Calculator extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '0',      // String
      value: 0 ,      // Float
      operand1: null, // Float
      operator: null, // ['+', '−', '×', '÷']
      operand2: null, // Float
      newValue: true,
      newStatement: true
    }

    this.handleDigit = this.handleDigit.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleClearAll = this.handleClearAll.bind(this)
    this.handleToggleSign = this.handleToggleSign.bind(this)
    this.handlePercent = this.handlePercent.bind(this)
  }

  handleDigit(digit) {

    if (!/^[0-9.]$/.test(digit)) {
      return
    }

    let text = this.state.text
    let value = this.state.value
    let operand1 = this.state.operand1
    let operator = this.state.operator
    let operand2 = this.state.operand2
    let newValue = this.state.newValue
    let newStatement = this.state.newStatement

    if (newValue || newStatement) {
      text = '0'
      value = 0
    }

    if (newStatement) {
      operand1 = null
      operator = null
      operand2 = null
    }

    if (digit == '.' && /\./.test(text)) {
      // more than one point is invalid
      return
    }

    if (digit != '.' && text == '0') {
      // remove the leading zero
      text = digit
      value = parseFloat(digit)
    }
    else {
      // append digit to text value
      let tmpValue = parseFloat(text + digit)

      if (tmpValue !== NaN && tmpValue == this.adjustValue(tmpValue)) {
        text = text + digit
        value = tmpValue
      }
    }

    this.setState({
      text: text,
      value: value,
      operand1: operand1,
      operator: operator,
      operand2: operand2,
      newValue: false,
      newStatement: false
    })
  }

  handleOperator(optor) {

    if (!/^[+−×÷=]$/.test(optor)) {
      return
    }

    let value = this.state.value
    let operand1 = this.state.operand1
    let operator = this.state.operator
    let operand2 = this.state.operand2
    let newValue = this.state.newValue
    let newStatement = this.state.newStatement

    if (operand1 === null && optor != '=')
      operand1 = value

    if (operand2 === null)
      operand2 = value

    if (operand1 !== null && operator !== null && operand2 !== null) {

      if (!newStatement || optor == '=') {

        switch (operator) {
          case '+':
            value = operand1 + operand2
            break
          case '−':
            value = operand1 - operand2
            break
          case '×':
            value = operand1 * operand2
            break
          case '÷':
            value = operand1 / operand2
            break
        }

        value = this.adjustValue(value)
        operand1 = value
      }
    }

    if (optor != '=') {
      operator = optor
      operand2 = null
    }

    newValue = true
    newStatement = (optor == '=')

    this.setState({
      text: String(value),
      value: value,
      operand1: operand1,
      operator: operator,
      operand2: operand2,
      newValue: newValue,
      newStatement: newStatement
    })
  }

  handleClearAll() {

    this.setState({
      text: '0',
      value: 0 ,
      operand1: null,
      operator: null,
      operand2: null,
      newValue: true,
      newStatement: true
    })
  }

  handleToggleSign() {
    let value = this.state.value * (-1)

    this.setState({
      text: String(value),
      value: value
    })
  }

  handlePercent() {
    let value = this.adjustValue(this.state.value * 0.01)

    this.setState({
      text: String(value),
      value: value
    })
  }

  adjustValue(value) {
    // adjust float value
    let split = String(value).split('.')

    if (split.length == 2) {
      let precision = Math.pow(10, 15 - split[0].length)

      if (precision < 1)
        return split[0]

      if (split[1].length >= String(precision).length)
        return Math.round(value * precision) / precision
    }

    return value
  }

  render() {

    let style = { maxWidth: '300px' }

    return (
      <div className="container" style={style}>
        <div className="row">
          <Output col={12} value={this.state.text} />
        </div>
        <div className="row">
          <FuncBtn col={3} handleClick={this.handleClearAll} funcName="AC" />
          <FuncBtn col={3} handleClick={this.handleToggleSign} funcName="+/−" />
          <FuncBtn col={3} handleClick={this.handlePercent} funcName="%" />
          <OperatorBtn col={3} handleOperator={this.handleOperator} operator="÷" />
        </div>
        <div className="row">
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="7" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="8" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="9" />
          <OperatorBtn col={3} handleOperator={this.handleOperator} operator="×" />
        </div>
        <div className="row">
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="4" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="5" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="6" />
          <OperatorBtn col={3} handleOperator={this.handleOperator} operator="−" />
        </div>
        <div className="row">
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="1" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="2" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="3" />
          <OperatorBtn col={3} handleOperator={this.handleOperator} operator="+" />
        </div>
        <div className="row">
          <DigitBtn col={6} handleDigit={this.handleDigit} digit="0" />
          <DigitBtn col={3} handleDigit={this.handleDigit} digit="." />
          <OperatorBtn col={3} handleOperator={this.handleOperator} operator="=" />
        </div>
      </div>
    )
  }
}

export default Calculator
