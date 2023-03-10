import React from 'react'
import CustomerList from '../../components/customerList'
import PageHeader from '../../components/pageHeader'

const CustomersPage = () => {
  return (
    <PageHeader title={'Listagem de Clientes'}
      customers
      children={
        <>
          <CustomerList />
        </>
      } />

  )
}

export default CustomersPage