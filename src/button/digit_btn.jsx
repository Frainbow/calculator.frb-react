import React from 'react'

class DigitBtn extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let className = "btn btn-default btn-lg col-xs-" + this.props.col

    return (
      <button className={className}>
        {this.props.digit}
      </button>
    )
  }
}

DigitBtn.propTypes = { col: React.PropTypes.number }
DigitBtn.defaultProps = { col: 1 }

export default DigitBtn
