import "./SearchBar.css";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Padding } from "@mui/icons-material";
type SearchGavno = {
    search: string;
    setSearch: (e: string)=>void;
}
function SearchBar({search, setSearch}: SearchGavno): JSX.Element {
    return (
        <div className="SearchBar">
			<TextField id="search" onChange={(e)=>{setSearch(e.target.value)}} value={search} placeholder="Search Todos" style={{height: '50px', padding:'1em'}}/><Button style={{marginTop: "1.5rem"}}>Search</Button>
        </div>
    );
}

export default SearchBar;
