import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Input } from '../src'

const renderer = TestUtils.createRenderer()

describe('Input', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Input />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('input')
  })
})
