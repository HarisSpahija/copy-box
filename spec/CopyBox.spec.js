import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as CopyBox } from '../src'

const renderer = TestUtils.createRenderer()

describe('CopyBox', () => {
  let tree

  beforeEach(() => {
    renderer.render(<CopyBox />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })
})
