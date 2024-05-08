import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import { ResultsProvider } from "./contexts/ResultsContext";

function App() {
  return (
    <ResultsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ResultsProvider>
  );
}

export default App;
