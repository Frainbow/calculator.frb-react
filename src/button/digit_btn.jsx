import React from 'react'

class DigitBtn extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleDigit(this.props.digit)
  }

  render() {

    let className = "btn btn-default btn-lg col-xs-" + this.props.col

    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.digit}
      </button>
    )
  }
}

DigitBtn.propTypes = { col: React.PropTypes.number }
DigitBtn.defaultProps = { col: 1 }

export default DigitBtn
