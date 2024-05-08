import { useState } from "react";
import { useResult } from "../contexts/ResultsContext";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchedTerm, dispatch } = useResult();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputSearch) return;
    const termToSearch = inputSearch || searchedTerm;
    dispatch({ type: "search", payload: termToSearch });
    navigate("/search");
  }

  function handleInput(e) {
    setInputSearch(e.target.value);
  }

  function handleMicClick() {
    setIsModalOpen(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setInputSearch(transcript);
    };
    recognition.start();
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 rounded-full px-2 w-full lg:w-sm h-10 mt-14 shadow-md"
        style={{
          width: window.innerWidth > 960 ? "calc(100vw - 60rem)" : "auto",
          minWidth: "20rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black-200 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="10" cy="10" r="7" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={inputSearch || searchedTerm}
          onChange={handleInput}
          placeholder="Search Google or type a URL"
          className="flex-grow focus:outline-none"
        />
        <img
          onClick={handleMicClick}
          className="h-8 w-8 mr-2 cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
          alt="mike"
        />
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Search;
