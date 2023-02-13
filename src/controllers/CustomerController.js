import CustomerRepository from "../repositories/CustomerRepository";
import CustomerStore from "../stores/CustomerStore";

class CustomerController {
  store = new CustomerStore()

  constructor(store) {
    this.store = store
    this._repository = new CustomerRepository()
  }

  async fetchCustomer() {
    return await this._repository.fetchCustomer()
      .then(({ data, errors }) => {
        if (!!data) {
          const { customers } = data
          if (!!customers) {
            let list = []
            list.push(customers)

          }
        }
      })
  }

}

export default CustomerController