import React from 'react'

class OperatorBtn extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let className = "btn btn-primary btn-lg col-xs-" + this.props.col

    return (
      <button className={className}>
        {this.props.operator}
      </button>
    )
  }
}

OperatorBtn.propTypes = { col: React.PropTypes.number }
OperatorBtn.defaultProps = { col: 1 }

export default OperatorBtn
