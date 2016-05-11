import { default as React, Component, createElement, PropTypes } from 'react'

export default class CopyBox extends Component {

  static defaultProps = {
    buttonIs: 'button',
    buttonProps: {},
    inputIs: 'input',
    inputProps: {}
  };

  static propTypes = {
    buttonIs: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    buttonProps: PropTypes.object,
    inputIs: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    inputProps: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = { success: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { input } = this.refs
    input.setSelectionRange(0, input.value.length)
    document.execCommand('copy')
    this.setState({ success: true })
  }

  render () {
    const { buttonIs, buttonProps, inputIs, inputProps } = this.props
    return (
      <div>
        {createElement(inputIs, {
          ref: 'input',
          type: 'text',
          value: 'Copy this text by clicking it',
          ...inputProps,
          onFocus: this.handleClick
        })}
        {createElement(buttonIs, {
          children: !this.state.success ? 'Click to copy' : 'Copied',
          ...buttonProps,
          onClick: this.handleClick
        })}
      </div>
    )
  }
}
