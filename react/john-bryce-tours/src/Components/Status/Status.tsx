import "./Status.css";
type StatusProps = {
    status : 'loading' | 'success' | 'error'
}
function Status(props: StatusProps): JSX.Element {
    let message
    if(props.status === "loading"){
        message = 'Loading...';
    }else if(props.status === 'success'){
        message = 'Data fetched successfully';
    }else if(props.status === 'error'){
        message = 'Error fetching data';
    }
    
    return (
        <div className="Status">
            <h2>Status - {message}</h2>            
        </div>
    );
}

export default Status;
