import { customerInfos } from "../queries/customers";
import { client } from "../services/graphql.service";

class CustomerRepository {

  async fetchCustomer() {
    return await client.query({
      query: customerInfos
    })
  }

}

export default CustomerRepository