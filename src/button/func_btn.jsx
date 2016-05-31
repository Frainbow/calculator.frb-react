import React from 'react'

class FuncBtn extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let className = "btn btn-info btn-lg col-xs-" + this.props.col

    return (
      <button className={className}>
        {this.props.func}
      </button>
    )
  }
}

FuncBtn.propTypes = { col: React.PropTypes.number }
FuncBtn.defaultProps = { col: 1 }

export default FuncBtn
