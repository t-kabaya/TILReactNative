import React from 'react'
import TilListItem from '../TilListItem'
import renderer from 'react-test-renderer'

it('renders nothng', () => {
  const til = []
  const tree = renderer.create(<TilListItem til={til} />).toJSON()

  expect(tree).toMatchSnapshot()
})

it('must render one item', () => {
  const til = [{ tilContentText: 'foo', postTimeText: 'bar' }]
  const tree = renderer.create(<TilListItem til={til} />).toJSON()

  expect(tree).toMatchSnapshot()
})
