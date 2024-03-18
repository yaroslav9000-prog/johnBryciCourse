import "./SomeChildren.css";
 
type SomeChildrenProps = {
    children : string
}

function SomeChildren(props: SomeChildrenProps): JSX.Element {
    return (
			<h2>{props.children}</h2>
    );
}

export default SomeChildren;
