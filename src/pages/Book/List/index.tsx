import { FC } from "react";
import { useGetBooksQuery } from "../../../generated/graphql";

const BookListPage: FC = () => {
  const { data, loading, error } = useGetBooksQuery();

  if (loading) return <p>...loading</p>;

  if (error) throw new Error(error.message);
  return (
    <div>
      {data?.books?.map((book, idx) => (
        <div>{book?.author.name}</div>
      ))}
    </div>
  );
};

export default BookListPage;
