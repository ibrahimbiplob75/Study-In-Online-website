import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";
import axios from "axios";
import Swal from "sweetalert2";


const Assignments = () => {
    const assignments=useLoaderData();
    console.log(assignments);
    const handleUpdate = (_id) => {
      axios.patch(`http://localhost:5000/assignments/${_id}`)
      .then(res=> console.log(res.data));
    };
    const handleDelete = (_id) => {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => 
      {
        if (result.isConfirmed){
          axios
            .delete(`http://localhost:5000/assignments/${_id}`)
            .then(function (response) {
              if (response) {
                Swal.fire({
                  title: "Success!",
                  text: "Your have Deleted Assignment Successfully",
                  icon: "success",
                  confirmButtonText: "Ok",
                });
                window.location.reload();
              }
            })
          .catch(function () {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
        }

      })
        

      
      
    };
    return (
      <div>
        <div className="overflow-x-auto m-4">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>level</th>
                <th>Submission Time Remaining</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assign) => (
                <Assignment
                  key={assign._id}
                  assign={assign}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></Assignment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Assignments;