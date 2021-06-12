import { FC } from "react";
import BookCard from "../../../components/BookCard";
import { useGetBooksQuery } from "../../../generated/graphql";
import styles from "./style.module.css";

const BookListPage: FC = () => {
  const { data, loading, error } = useGetBooksQuery();

  if (loading) return <p>...loading</p>;

  if (error) throw new Error(error.message);
  if (!data?.books?.length) return <p>データがありません。</p>;

  return (
    <div className={styles.page}>
      <h1>本一覧</h1>
      {data.books.map((book, idx) => {
        if (book === null) throw new Error("本のデータがありません。");
        return (
          <div className={styles.cardWrapper}>
            <BookCard book={book} key={idx} />
          </div>
        );
      })}
    </div>
  );
};

export default BookListPage;
