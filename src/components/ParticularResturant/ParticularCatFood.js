import { ParticularContext } from "./ParticularContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartStore";
const ParticularCatFood = ({ itemList }) => {
  const data = useContext(ParticularContext);
  console.log("context data from list", data);

  const dispatch = useDispatch();
  const handleAdd = (val) => {
    dispatch(addItem(val));
  };

  return (
    <div className="mb-3">
      <div className="flex flex-col">
        {itemList.map((ele) => (
          <div key={ele.card.info.id} className="border p-2 flex flex-col">
            <span>
              {ele.card.info.name} - Rs. {ele.card.info.price / 100} from
              resturan {data.username}
            </span>
            <span className="italic">{ele.card.info.description}</span>
            <button
              className="border-2 border-solid border-black w-40 p-1 rounded"
              onClick={() => handleAdd(ele)}
            >
              Add Food
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ParticularCatFood;
