import { getAllUserTil } from './ORM'

test('must return dateText', async () => {
  const response = await getAllUserTil()
  expect(response).toEqual(true)
})
