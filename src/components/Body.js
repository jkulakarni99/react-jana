import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {

  // State variable - Super powerfull variable 
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body-wrapper">
      <div className="filter" style={{ margin: "1rem 2rem 0 1.3rem" }}>
        <button className="filter-btn" onClick={() => {
          const filteredData = listOfRes.filter(ele => ele?.data?.star > 4);
          setListOfRes(filteredData)
        }}>Top Rated Resturant</button>
      </div>
      <div className="res-cont">
        {listOfRes.map((ele, index) => (
          <ResturantCard key={index} restDetails={ele} />
        ))}
      </div>
    </div>
  );
};
export default Body;
