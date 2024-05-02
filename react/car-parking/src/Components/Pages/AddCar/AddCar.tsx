import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./AddCar.css";
import axios from "axios";
import { Car } from "../../model/Car";

function AddCar(): JSX.Element {
    const DATA_GOVil = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
    const [results, setResults] = useState();
    const [inputVal, setInputValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value);
        console.log(inputVal);
    }
    const handleSearch = (value: string)=>{
        
        const completeUrl = DATA_GOVil + value;
        axios.get(completeUrl).then(result=> console.log(result.data.result.records));    
    }
    return (
        <div className="AddCar">
			<h1>Add car</h1>
            <input onChange={(e)=>{handleChange(e)}} type="text" />
            <button onClick={()=>handleSearch(inputVal)}>Search</button>
        </div>
    );
}

export default AddCar;
