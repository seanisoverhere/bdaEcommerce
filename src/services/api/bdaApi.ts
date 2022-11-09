import apiSauce from 'apisauce'

const bdaApi = apiSauce.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

// READ
const getItems = () => bdaApi.get('/articles')

export default {
  getItems
}