import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'

function App(){

  const [data1,setData] = useState([{
    college : "",
    course : "",
    location : "",
    status : "",
    date : "",
  }]);

  useEffect(() => {
    async function getdata(){
      const resp = await axios.get("http://localhost:8080/getdata/a");
      const res = resp.data;
      console.log(res[0]);
      setData((old) => {
        return [...res];
      });
      }
      getdata();
  });

  return (
    <table className="table table-striped verticlespace">
    <caption className="cap">Status of the applications</caption>
    <thead>
    <tr className="tableheadingcolour">
    <td>Sr.No.</td>
    <td>College</td>
    <td>Course</td>
    <td>Location</td>
    <td>Status</td>
    <td>Date</td>
    </tr>
    </thead>
    <tbody>
    {
      data1.map((cvalue, index) => {
      return (
      <>
      <Row 
      key = {index}
      srno = {index + 1}
      college = {cvalue.college}
      course = {cvalue.course}
      location = {cvalue.location}
      status = {cvalue.status}
      date = {cvalue.date}
      />
      </>
      );
    })
    }
    </tbody>
    </table>
  );
}

export default App;