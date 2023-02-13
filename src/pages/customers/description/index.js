import React from 'react'
import CustomerDescription from '../../../components/customerDescription'
import PageHeader from '../../../components/pageHeader'

const CustomerDescriptionPage = () => {
  return (
    <PageHeader
      title={'Descrição do Cliente'}
      children={
        <CustomerDescription />
      }
      customers
    />
  )
}

export default CustomerDescriptionPage