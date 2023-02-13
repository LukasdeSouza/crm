import { createContext } from "react";
import CustomerStore from "../stores/CustomerStore";

class RootStore {
  constructor() {
    this.customerStore = new CustomerStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore());

export default RootStoreContext