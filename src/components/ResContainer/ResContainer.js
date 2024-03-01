import ResturantCard from "../RestCards/ResturantCard";
import { WithOffer } from "../RestCards/ResturantCard";
import { Link } from "react-router-dom";
import "./ResContainer.css";
const ResContainer = (prop) => {
  const { cardList } = prop;
  const WithOfferCard = WithOffer(ResturantCard);
  console.warn(cardList);
  return (
    <div className="res-cont">
      {cardList?.map((ele) => (
        <Link
          to={"resturant/" + ele.info.id}
          key={ele.info.id}
          className="card-click"
        >
          {ele.info?.aggregatedDiscountInfoV3?.header ? (
            <WithOfferCard restDetails={ele} />
          ) : (
            <ResturantCard restDetails={ele} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default ResContainer;
