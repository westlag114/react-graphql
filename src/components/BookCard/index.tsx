import { FC } from "react";
import { BookCardFragment } from "../../generated/graphql";
import styles from "./style.module.css";

type Props = {
  book: BookCardFragment;
};
const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className={styles.card}>
      <p>タイトル:{book.title}</p>
      <p>著者:{book.author.name}</p>
    </div>
  );
};

export default BookCard;
