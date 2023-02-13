import { action, makeAutoObservable, observable, computed } from "mobx";

class CustomerStore {

  state = {
    customerList: [],
    customer: {},
    loading: false,
    loadingDelete: false,
    loadingSave: false,
  }
  alert = {
    open: false,
    message: '',
    type: 'success'
  }

  constructor() {
    makeAutoObservable(this, {
      state: observable,
      pagination: observable,

      setState: action,
      setAlert: action,
      setPagination: action,

      getItemCount: computed
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setAlert(open, type, message) {
    this.alert.open = open;

    if (type) {
      this.alert.type = type;
      this.alert.message = message;
    }
  }

}

export default CustomerStore