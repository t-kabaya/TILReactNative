import fireStoreMock from './fireStoreMock'

test('mock test', () => {
  const res = fireStoreMock.collection()
  expect(JSON.stringify(res)).toEqual(true)
})
