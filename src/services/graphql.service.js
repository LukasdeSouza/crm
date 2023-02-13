import { httpBase } from '../utils/constants'
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


const client = new ApolloClient({
  uri: httpBase,
  cache: new InMemoryCache()
})

export { client }