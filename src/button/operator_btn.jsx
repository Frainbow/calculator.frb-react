import React from 'react'

class OperatorBtn extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleOperator(this.props.operator)
  }

  render() {

    let className = "btn btn-primary btn-lg col-xs-" + this.props.col

    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.operator}
      </button>
    )
  }
}

OperatorBtn.propTypes = { col: React.PropTypes.number }
OperatorBtn.defaultProps = { col: 1 }

export default OperatorBtn
