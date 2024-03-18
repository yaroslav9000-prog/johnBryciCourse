import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
			<nav>
                <h1 style={{fontWeight: 700,}}>Bryce tours</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New blog</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
