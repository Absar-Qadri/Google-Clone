import { Link } from "react-router-dom";
import { useResult } from "../contexts/ResultsContext";

function SearchHeader() {
  const { searchedTerm } = useResult();
  return (
    <ul className="flex items-center px-40 gap-4 mt-1 text-zinc-500 text-sm border-b border-gray-300">
      <li className=" pt-4 pb-4 text-blue-500 font-bold border-b-2 border-blue-500  items-center text-center">
        App
      </li>
      <li>
        <Link
          to={`https://www.google.com/search?q=${searchedTerm}&sca_esv=806c85fb53054c4e&sca_upv=1&hl=en&sxsrf=ADLYWIKYoCHpAeKSNzcmHMGZAVNXsxRr3Q:1715120950777&source=hp&biw=1536&bih=730&ei=Nqs6Zt7BLejH4-EP6_S38A4&iflsig=AL9hbdgAAAAAZjq5RgUgLzrd1SSIHmAQHyJmK7T7vKVo&ved=0ahUKEwjetJC4y_yFAxXo4zgGHWv6De4Q4dUDCA8&uact=5&oq=apple&gs_lp=EgNpbWciBWFwcGxlMgQQIxgnMgQQIxgnMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQNI6yBQ-QNYrh9wCHgAkAEAmAGsAaAB8gmqAQMwLji4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCEKACuAqoAgrCAgcQIxgnGOoCwgIFEAAYgATCAgQQABgDwgILEAAYgAQYsQMYgwHCAgkQABiABBgYGAqYAwmSBwM4LjigB68y&sclient=img&udm=2`}
        >
          Images
        </Link>
      </li>
      <li>
        <Link
          to={`https://www.google.com/search?sca_esv=806c85fb53054c4e&sca_upv=1&hl=en&sxsrf=ADLYWIJGEGGjrMU6DeXFQp7ZC6wofzLbmA:1715121381689&q=${searchedTerm}&tbm=shop&source=lnms&prmd=isvnmbtz&ved=1t:200715&ictx=111&biw=1536&bih=730&dpr=1.25`}
        >
          Shopping
        </Link>
      </li>
      <li>
        <Link
          to={`https://www.google.com/search?q=${searchedTerm}&sca_esv=806c85fb53054c4e&sca_upv=1&hl=en&biw=1536&bih=730&tbm=vid&prmd=isvnmbtz&sxsrf=ADLYWIIMEHL_W3-CGg5lXrdd3esziqOxEg:1715121454884&source=lnms&ved=1t:200715&ictx=111`}
        >
          Videos
        </Link>
      </li>
      <li>
        <Link
          to={`https://www.google.com/search?q=${searchedTerm}&sca_esv=806c85fb53054c4e&sca_upv=1&hl=en&tbm=nws&prmd=isvnmbtz&sxsrf=ADLYWILEiXtsjhOaV459m9on_GParzydRg:1715121482820&source=lnms&sa=X&ved=2ahUKEwjso-u1zfyFAxWY3TgGHXiMCnsQ0pQJegQIAhAK&biw=1536&bih=730&dpr=1.25`}
        >
          News
        </Link>
      </li>
    </ul>
  );
}

export default SearchHeader;
