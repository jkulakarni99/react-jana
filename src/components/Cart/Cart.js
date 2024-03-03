import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../utils/cartStore";
const Cart = () => {
  const itemList = useSelector((store) => store.cart);
  console.log("after remove", itemList);
  const dispatch = useDispatch();

  const handleRemove = (ele) => {
    dispatch(removeItem(ele));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };
  if (itemList.items.length === 0)
    return (
      <div className="text-center mt-5">
        Cart is empty, pls add food
        <span> Lets have some grete food</span>
      </div>
    );

  return (
    <div>
      <button
        className="border-2 border-solid border-black w-40 p-1 rounded"
        onClick={() => handleClear()}
      >
        Clear Cart
      </button>
      <div className="flex flex-col">
        <div className="text-start px-3 mx-auto my-3 w-6/12">
          {itemList.items.map((ele) => (
            <div key={ele.card.info.id} className="border p-2 flex flex-col">
              <span>
                {ele.card.info.name} - Rs. {ele.card.info.price / 100} from
                resturan
              </span>
              <span className="italic">{ele.card.info.description}</span>
              <button
                className="border-2 border-solid border-black w-40 p-1 rounded"
                onClick={() => handleRemove(ele)}
              >
                Remove Food
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
