import PageHeader from '../../components/pageHeader'
import BasicChart from '../../components/charts'

const DashboardPage = () => {
  return (
    <PageHeader
      title={'Dashboard'}
      children={
        <BasicChart />
      }
    />
  )
}

export default DashboardPage