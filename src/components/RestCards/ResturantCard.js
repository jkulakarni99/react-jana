import { FOOD_IMG } from "../../utils/constants";
import "./ResCard.css";
const ResturantCard = (prop) => {
  const { restDetails } = prop;
  const {
    name,
    cuisines,
    locality,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    id,
  } = restDetails?.info;
  const offerName = prop?.offer;
  return (
    <div className="card-wrapper" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rest-img" src={`${FOOD_IMG}${cloudinaryImageId}`} />
      <h3>{name}</h3>{offerName && <span className="font-bold">With {offerName}</span>}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{restDetails?.info?.sla?.slaString}</h4>
      <h4>{avgRatingString}*</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export const WithOffer = (ResturantCard) => {
  return ({restDetails}) => {
    return (
      <div>
        <ResturantCard restDetails={restDetails} offer={restDetails.info.aggregatedDiscountInfoV3.header}/>
      </div>
    );
  };
};
export default ResturantCard;
