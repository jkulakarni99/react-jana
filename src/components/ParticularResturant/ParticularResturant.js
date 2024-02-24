import { useState, useEffect } from "react";
import { RESTU_API } from "../../utils/constants";
import SkeletionLoad from "../SkeletonLoader/SkeletonLoad";
import { useParams } from "react-router-dom";

const ParticularRest = () => {

  let [resDetails, setResDetails] = useState(null);

  const {restId} = useParams();
  
  async function getDetailsOfRest() {
    const data = await fetch(`${RESTU_API}${restId}`);
    const json = await data.json();
    console.log(json.data);
    setResDetails(json.data);
  }

  useEffect(() => {
    getDetailsOfRest();
  }, []);

  if (resDetails === null) return <SkeletionLoad />;

  const resName = resDetails?.cards[0]?.card.card?.text;
  const { cuisines, areaName } = resDetails?.cards[2]?.card?.card.info;
  const category =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.title;
  const { itemCards } =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h2>{resName}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>

      <h3>{category} Pizza are listed below</h3>
      <ul>
        {itemCards.map((ele) => (
          <li key={ele.card.info.id}>{ele.card.info.name} - Rs.{ele.card.info.defaultPrice || ele.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};
export default ParticularRest;
