import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResMenu = () => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    } , []);

    const{resID} = useParams();
    

    

    const fetchData = async () => {
        // Swiggy res API not working
        const data = await fetch("https://www.swiggy.com/restaurants/chinese-wok-sector-34-sector-15-gurgaon-594820" + 
        {resID});
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    const {name , cuisines , costForTwo} = 
    resInfo.data.json.cards[0].data.info;

    const {itemCard} = 
    resInfo.data.json.blah.blah.info;


    if(resInfo === null) <Shimmer />;
     
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>
                <p>{cuisines.join(", ")}</p>
            </h2>

            <h2>map</h2>
            <ul>
                {itemCard.map((item) => (
                    <li>{item.card.info.name} - {item.card.info.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default ResMenu;