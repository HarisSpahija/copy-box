import { createElement, PropTypes } from 'react'
import { copyToClipboard } from '.'

const CopyBoxInput = ({ className, is, ...props }) => createElement(is, {
  onFocus: copyToClipboard,
  readOnly: true,
  type: 'text',
  value: 'Copy this text by clicking it',
  ...props,
  className: `copy-box-input ${className ? ` ${className}` : ''}`
})

CopyBoxInput.defaultProps = {
  is: 'input'
}

CopyBoxInput.propTypes = {
  is: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
}

export default CopyBoxInput
