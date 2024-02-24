import ResturantCard from "../RestCards/ResturantCard";
import { Link } from "react-router-dom";
import "./ResContainer.css"
const ResContainer = (prop) => {
  const { cardList } = prop;
  return (
    <div className="res-cont">
      {cardList?.map(ele => (
        <Link to={"resturant/"+ele.info.id} key={ele.info.id} className="card-click"><ResturantCard restDetails={ele} /></Link>
      ))}
    </div>
  );
};
export default ResContainer;
