import { Link } from "react-router-dom";
import { useResult } from "../contexts/ResultsContext";

function AccersoriesComponent() {
  const { accessoryOpen } = useResult();
  if (!accessoryOpen) return;
  return (
    <div className="absolute top-3 right-6 mt-20 mr-4">
      <div className="bg-slate-100 p-2 rounded-lg">
        <div
          className="grid grid-cols-3 gap-8 items-center bg-neutral-50 p-4 rounded-lg"
          style={{ width: "300px" }}
        >
          <Link to={"/"} className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="G-Logo"
            />
            <span>Search</span>
          </Link>

          <Link
            to={"https://www.youtube.com/"}
            className="flex flex-col items-center"
          >
            <img
              className="w-9"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
              alt="Youtube"
            />
            <span>Youtube</span>
          </Link>

          <Link
            to={"https://www.google.com/maps"}
            className="flex flex-col items-center"
          >
            <img
              className="w-5 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/167px-Google_Maps_icon_%282020%29.svg.png"
              alt="Maps"
            />
            <span>Maps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccersoriesComponent;
