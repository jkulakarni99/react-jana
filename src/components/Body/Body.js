import ResContainer from "../ResContainer/ResContainer";
import SkeletionLoad from "../SkeletonLoader/SkeletonLoad";
import { useState } from "react";
import { useRestList } from "../../utils/useReslist";
const Body = () => {
  // State variable - Super powerfull variable
  const [btnName, setBtnName] = useState('Top reated Resturants');

  let {listOfRes, tempListOfRes, editList} = useRestList();

  function filterTopRated(val) {
    if (val.includes('Clear')) {
      editList(tempListOfRes);
    }
    else {
      // const filteredData = listOfRes.filter((ele) => ele?.info?.avgRatingString > 4.3);
      listOfRes = listOfRes.filter(ele => ele?.info?.avgRatingString > 4.3);
      editList(listOfRes)
    }
  }

  function onClickTop() {
    btnName.includes('Top') ? setBtnName('Clear') : setBtnName('Top reated Resturants');
    filterTopRated(btnName)
  }
  return listOfRes.length === 0 ? (
    <SkeletionLoad />
  ) : (
    <div className="body-wrapper">
      <div className="filter" style={{ margin: "1rem 2rem 0 1.3rem" }}>
        <button
          className="border-4 p-2"
          onClick={onClickTop}
        >
          {btnName}
        </button>
      </div>
      <div>
        <ResContainer cardList={listOfRes} />
      </div>
    </div>
  );
};
export default Body;
