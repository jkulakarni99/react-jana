import { useContext } from "react"
import { ParticularContext } from "./ParticularContext"
import ParticularCatFood from "./ParticularCatFood"
const Category = ({values, showList, setIndexMethod}) => {

    const data = useContext(ParticularContext);
    return (
        <div>
            <div className="flex flex-col">
            <div className="text-start px-3 mx-auto my-3 w-6/12">
                <div className="text-lg flex border p-2 justify-between cursor-pointer" onClick={() => setIndexMethod()}>
                <span>{values.title}</span>
                <span>Expand</span>
                </div>
                {showList && <ParticularCatFood itemList={values.itemCards}/>}
            </div>
        </div>
        </div>
    )
}

export default Category