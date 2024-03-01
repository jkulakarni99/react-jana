import { useState, useEffect } from "react";
import { RESTU_API } from "./constants";

export const useRestData = (id) =>{
    const [resDetails, setResDetails] = useState(null);
    useEffect(() => {
        getDetailsOfRest();
    }, []);
    async function getDetailsOfRest() {
        const data = await fetch(`${RESTU_API}${'17299'}`);
        const json = await data.json();
        setResDetails(json.data);
    }
    return resDetails;
}
