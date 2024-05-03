import SkeletionLoad from "../SkeletonLoader/SkeletonLoad";
import { useParams } from "react-router-dom";
import { useRestData } from "../../utils/useRestData";
import { useState } from "react";
import { ParticularContext } from "./ParticularContext";
import { useLocation } from "react-router-dom";
import Category from "./Category";

const ParticularRest = () => {
  const [showIndex, setShowIndex] = useState(0);
  const [contName, setContName] = useState("Janardhana");
  const { restId } = useParams();
  const resDetails = useRestData(restId);

  console.warn("data", resDetails);

  if (resDetails === undefined || resDetails === null) return <SkeletionLoad />;

  console.warn("data121212", resDetails);
  const resName = resDetails?.cards[2]?.card.card?.info.name;
  const { cuisines, areaName } = resDetails?.cards[2]?.card?.card.info;
  const categoryListAndData =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => ele?.card?.card["@type"].includes("ItemCategory")
    );
  console.warn(categoryListAndData);

  return (
    <ParticularContext.Provider
      value={{ username: contName, onChangeName: setContName }}
    >
      <div>
        <h1 className="flex justify-center mt-4">{resName}</h1>
        <h4 className="flex justify-center">{cuisines.join(", ")}</h4>
        <h4 className="flex justify-center">{areaName}</h4>
        {categoryListAndData.map((ele, index) => (
          <Category
            key={ele.card.card.title}
            values={ele.card.card}
            showList={index === showIndex ? true : false}
            setIndexMethod={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </ParticularContext.Provider>
  );
};
export default ParticularRest;
