import { useState, useEffect } from "react";
export const useRestList = () => {
    
    const [tempListOfRes, settempListOfRes] = useState([]);
    const [listOfRes, setListOfRes] = useState([]);

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9981732&lng=77.55304459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const resInfo = await data.json();
        setListOfRes(
          resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        settempListOfRes(resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants);
      };
    const editList = (list) => {
      setListOfRes(list)
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return {tempListOfRes,listOfRes, editList}
}