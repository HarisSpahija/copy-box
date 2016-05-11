import { default as React, createElement, PropTypes } from 'react'
import { Flex } from 'reflexbox'

const CopyBox = ({ buttonIs, buttonProps, inputIs, inputProps }) =>
  <Flex>
    {createElement(inputIs, inputProps)}
    {createElement(buttonIs, buttonProps)}
  </Flex>

CopyBox.defaultProps = {
  buttonIs: 'button',
  inputIs: 'input'
}

CopyBox.propTypes = {
  buttonIs: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  buttonProps: PropTypes.object,
  inputIs: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  inputProps: PropTypes.object
}

export default CopyBox
