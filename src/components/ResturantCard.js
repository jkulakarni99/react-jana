const ResturantCard = (prop) => {
  const { restDetails } = prop;
  const { name, subInfo, eod, star, costOfTwo, imgLink } = restDetails?.data;
  return (
    <div className="card-wrapper" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rest-img" src={imgLink} />
      <h3>{name}</h3>
      <h4>{subInfo}</h4>
      <h4>{eod} Minutes</h4>
      <h4>{star} Stars</h4>
      <h4>{costOfTwo} For Two</h4>
    </div>
  );
};
export default ResturantCard;
