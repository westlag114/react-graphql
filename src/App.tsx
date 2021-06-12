import { FC } from "react";
import "./App.css";
import BookListPage from "./pages/Book/List";

const App: FC = () => {
  return (
    <div className="App">
      <BookListPage />
    </div>
  );
};

export default App;
