import "./Person.css";

type PersonProps = {
    name: {
        first : string;
        last: string;
    }
}


function Person(props: PersonProps): JSX.Element {
    return (
        <div className="Person">
			{props.name.first} {props.name.last}
        </div>
    );
}

export default Person;
