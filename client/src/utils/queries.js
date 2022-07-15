import { gql } from '@apollo/client';

export const GET_SINGLE_PAGE = gql`
  query Page($pageTitle: String!) {
    page(pageTitle: $pageTitle) {
      _id
      pageTitle
      content
    }
  }
`;
