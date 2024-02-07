import ResturantCard from "../RestCards/ResturantCard";
const ResContainer = (prop) => {
  const { cardList } = prop;
  return (
    <div className="res-cont">
      {cardList?.map((ele, index) => (
        <ResturantCard key={index} restDetails={ele} />
      ))}
    </div>
  );
};
export default ResContainer;
