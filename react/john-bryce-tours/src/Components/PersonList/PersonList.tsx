import "./PersonList.css";

type PersonListProps ={
    names: {
        first: string,
        last: string
    }[]
}

function PersonList(props: PersonListProps): JSX.Element {
    return (
        <div className="PersonList">
			{
                props.names.map(name =>{
                    return(
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )})
            }
        </div>
    );
}

export default PersonList;
