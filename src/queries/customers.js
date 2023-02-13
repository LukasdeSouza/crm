import gql from 'graphql-tag'

export const customerInfos = gql`
query customerInfos {
  customers {
    celphone
    adress
    createdAt
    name
    profession
    whatTimeAnswered
    whoanswered
  }
}
`
