import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { auth } from "./firebase";
import { useState } from "react";
import Logo from "./amazonlogo.png";
import { useSelector, useDispatch } from "react-redux";
import { inputValue, selectItems, selectUser } from "./features/basketSlice";

const Header = () => {
  const basket = useSelector(selectItems);
  const user = useSelector(selectUser);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history=useHistory()

  const searchInput = (event:{preventDefault:any}) => {
    event.preventDefault();
    dispatch(inputValue(value));
    if (value.length === 0){
      history.push('/')
    }else{
      history.push('/search')
    }
  };

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="bg-slate-800  flex flex-col sticky top-0 z-[100] min-w-[380px]">
      <div className="h-[80px] flex items-center justify-between">
        <Link
          to="/"
          className="m-[20px] hover:border-solid hover:border-white hover:border-[1px]"
        >
          <img
            className="object-contain w-[100px] pt-[10px]"
          src={Logo}
            alt=''
          />
        </Link>
        <form
          onSubmit={searchInput}
          className="hidden bg-white md:flex items-center flex-1 rounded-md"
        >
          <input
            type="search"
            className="w-full h-[25px] m-[5px] p-[5px] outline-none border-none"
            onChange={(e) => setValue(e.target.value.toLowerCase())}
          />
          <button>
            <SearchIcon className="bg-orange-400 m-0 p-1 !h-[35px] !w-[35px] rounded-[4px] cursor-pointer" />
          </button>
        </form>
        <div className="flex justify-evenly items-center m-5">
          <Link
            to={!user && "/login"}
            className="text-white hover:border-solid hover:border-white hover:border-[1px] no-underline"
          >
            <div
              onClick={login}
              aria-hidden="true"
              className="flex flex-col mx-[10px] "
            >
              <span className="text-[9px] md:text-[10px]">
                {user ? `Hello,  ${user}` : "Hello, Sign In"}
              </span>
              <span className="text-[11px] md:text-[13px] font-[800]">
                Account & Lists
              </span>
            </div>
          </Link>jjjjjjjjjj
          <Link
            to={value  ? '/search' : '/'}
            className="text-white hover:border-solid hover:border-white hover:border-[1px] no-underline"
          >
            <div className="flex flex-col mx-[10px] ">
              <span className="text-[9px] md:text-[10px]">Returns</span>
              <span className="text-[11px] md:text-[13px] font-[800]">
                & Orders
              </span>
            </div>
          </Link>
          <Link
            to="/checkout"
            className="h-fit text-white flex hover:border-solid hover:border-white hover:border-[1px] no-underline mr-1"
          >
            <div className="flex items-center relative p-0 m-0">
              <ShoppingCart sx={{ fontSize: "30px" }} className="m-0 p-0" />
              <div className="bg-orange-500 absolute top-0 right-0 text-[12px] font-[750] text-black rounded-full m-[-5px] px-1">
                {basket?.length}
              </div>
            </div>
            <div className="hidden md:flex items-end ">Cart</div>
          </Link>
        </div>
      </div>
      <form
        onSubmit={searchInput}
        className="md:hidden bg-white my-[5px] mx-[10px] flex items-center rounded-md"
      >
        <input
          type="search"
          className="w-full h-[12px] m-[5px] p-[10px] outline-none border-none"
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        />
        <button>
          <SearchIcon className="bg-orange-400 m-0 p-1 !h-[30px] !w-[30px] rounded-[4px] cursor-pointer" />
        </button>
      </form>
    </nav>
  );
};

export default Header;
