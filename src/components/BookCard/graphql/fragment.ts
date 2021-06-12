import { gql } from "@apollo/client";

export const BOOK_CARD_FRAGMENT = gql`
  fragment BookCard on Book {
    id
    title
    author {
      id
      name
    }
  }
`;
