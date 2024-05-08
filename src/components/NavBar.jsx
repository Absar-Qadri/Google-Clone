import { useResult } from "../contexts/ResultsContext";

function NavBar() {
  const { dispatch } = useResult();
  return (
    <nav className="text-sm text-zinc-500 flex justify-end items-center space-x-4 ">
      <a
        className="hover:underline"
        href="https://mail.google.com/mail/&ogbl"
        rel="noopener noreferrer"
      >
        Gmail
      </a>
      <a
        className="hover:underline"
        href="https://www.google.com/imghp?hl=en&tab=ri&ogbl"
        rel="noopener noreferrer"
      >
        Images
      </a>

      <a
        className="p-0 w-12 h-12 hover:bg-gray-200 flex justify-center items-center rounded-full m-0"
        href="https://labs.google.com/search?source=ntp"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 -960 960 960" height="24px" width="24px">
          <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z" />
        </svg>
      </a>
      <button
        onClick={() => dispatch({ type: "accessory" })}
        className="p-0 flex justify-center items-center w-10 h-10 hover:bg-gray-200 rounded-full m-0 mr-0 space-x-no-margin"
      >
        <img
          src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
          alt="dots"
        />
      </button>
    </nav>
  );
}

export default NavBar;
