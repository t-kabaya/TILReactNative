import React from 'react'
import HomeScreen from '../HomeScreen'
import renderer from 'react-test-renderer'

// Ioniconsは、<Text />と判定されるので、このテストに意味はないが、一応記述
it('not focused home icon', async () => {
  const tree = await renderer.create(<HomeScreen />).toJSON()

  expect(tree).toMatchSnapshot()
})
