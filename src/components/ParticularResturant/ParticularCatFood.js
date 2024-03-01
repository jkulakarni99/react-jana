import { ParticularContext } from "./ParticularContext"
import { useContext } from "react";
const ParticularCatFood = ({itemList}) => {
  const data = useContext(ParticularContext)
console.log('context data from list', data);
  return (
    <div className="mb-3" >
      <div className="flex flex-col">
        {itemList.map((ele) => (
        <div key={ele.card.info.id} className="border p-2 flex flex-col">
          <span>{ele.card.info.name} - Rs. {ele.card.info.price/100} from resturan {data}</span>
          <span className="italic">{ele.card.info.description}</span>
        </div>
        ))}
      </div>
    </div>
  );
};
export default ParticularCatFood;