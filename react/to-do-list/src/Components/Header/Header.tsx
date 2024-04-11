import "./Header.css";
type Name = {
    headerName: string;
}
function Header({headerName} : Name): JSX.Element {
    return (
        <div className="Header" style={{display: "flex", justifyContent: "start", borderBottom: "black solid 1px"}}>
			<h1 style={{paddingLeft: "1rem"}}>{headerName}</h1>

        </div>
    );
}
Header.defaultProps = {
    headerName: "piska"
}
export default Header;
