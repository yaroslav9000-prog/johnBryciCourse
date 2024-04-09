import "./Header.css";
type Name = {
    headerName: string;
}
function Header({headerName} : Name): JSX.Element {
    return (
        <div className="Header">
			<h1>{headerName}</h1>
            <hr />
        </div>
    );
}
Header.defaultProps = {
    headerName: "piska"
}
export default Header;
