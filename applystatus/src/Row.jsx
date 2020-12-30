import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function statuschecker(value){
    if(value == "Applied")
    {
        return "badge badge-pill badge-secondary";
    }
    else if(value == "Shortlisted")
    {
        return "badge badge-pill badge-info";
    }
    else if(value == "Selected")
    {
        return "badge badge-pill badge-success";
    }
    else if(value == "Rejected")
    {
        return "badge badge-pill badge-danger";
    }   
}

const Row = (props) => {
    return (<tr>
        <td>{props.srno}</td>
        <td>{props.college}</td>    
        <td>{props.course}</td> 
        <td>{props.location}</td> 
        <td><span className={statuschecker(props.status)}>{props.status}</span></td> 
        <td>{props.date}</td> 
        </tr>);
}

export default Row;