import ResturantCard from "../RestCards/ResturantCard";
import ResContainer from "../ResContainer/ResContainer";
import SkeletionLoad from "../SkeletonLoader/SkeletonLoad";
import { useState } from "react";
import { useEffect } from "react";
const Body = () => {
  // State variable - Super powerfull variable
  const [listOfRes, setListOfRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9981732&lng=77.55304459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resInfo = await data.json();
    console.log(resInfo);
    console.log("bypassed awaut");
    setListOfRes(
      resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(listOfRes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("before userEffect");

  return listOfRes.length === 0 ? (
    <SkeletionLoad />
  ) : (
    <div className="body-wrapper">
      {/* <div className="filter" style={{ margin: "1rem 2rem 0 1.3rem" }}>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRes.filter((ele) => ele?.data?.star > 4);
            setListOfRes(filteredData);
          }}
        >
          Top Rated Resturant
        </button>
      </div> */}
      <div>
        <ResContainer cardList={listOfRes} />
      </div>
    </div>
  );
};
export default Body;
