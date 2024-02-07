import { FOOD_IMG } from "../../utils/constants";
const ResturantCard = (prop) => {
  const { restDetails } = prop;
  console.log(restDetails?.info)
  const { name, cuisines, locality, avgRatingString, costForTwo, cloudinaryImageId } = restDetails?.info;
  return (
    <div className="card-wrapper" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rest-img" src={`${FOOD_IMG}${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{restDetails?.info?.sla?.slaString}</h4>
      <h4>{avgRatingString}*</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default ResturantCard;
