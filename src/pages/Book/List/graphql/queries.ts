import { gql } from "@apollo/client";
import { BOOK_CARD_FRAGMENT } from "../../../../components/BookCard/graphql/fragment";

export const BOOK_LIST_QUERIES = gql`
  query GetBooks {
    books {
      ...BookCard
    }
  }

  ${BOOK_CARD_FRAGMENT}
`;
