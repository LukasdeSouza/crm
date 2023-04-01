import { customerInfos } from "../queries/customers";
import { client } from "../services/graphql.service";

class CustomerRepository {

  async fetchCustomer() {
    return await client.query({
      query: customerInfos
    })
  }

  async createCustomer(customer) {
    return await client.mutate({
      // mutation: createCustomer,
      variables: { customer },
    })
  }

}

export default CustomerRepository