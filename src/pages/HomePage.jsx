import AccersoriesComponent from "../components/AccersoriesComponent";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

function HomePage() {
  return (
    <>
      <NavBar />
      <div
        className="flex flex-col justify-center items-center h-screen w-full "
        style={{
          height: "calc(100vh - 9rem)",
          width: "calc(100vw - 9rem)",
          marginTop: "-5rem",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google-logo"
        />
        <Search />
      </div>
      <AccersoriesComponent />
    </>
  );
}

export default HomePage;
