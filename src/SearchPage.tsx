import { useSelector } from "react-redux";
import Barner from "./Barner";
import { selectProducts } from "./features/basketSlice";
import SearchProductFeed from "./SearchProductFeed";

const Home = () => {
  const products=useSelector(selectProducts)

  return (
    <div className="max-w-screen-2xl min-w-[380px] ml-auto mr-auto">
      <Barner />
      <div className="">
        <SearchProductFeed products={products} />
      </div>
    </div>
  );
};

export default Home;
