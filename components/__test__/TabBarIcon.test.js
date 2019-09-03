import React from 'react'
import TabBarIcon from '../TabBarIcon'
import renderer from 'react-test-renderer'

// Ioniconsは、<Text />と判定されるので、このテストに意味はないが、一応記述
it('not focused home icon', () => {
  const tree = renderer
    .create(<TabBarIcon focused={false} name={'md-home'} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
