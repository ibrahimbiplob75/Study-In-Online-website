import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";


const Assignments = () => {
    const assignments=useLoaderData();
    const handleUpdate = (_id) => {
      console.log(_id);
    };
    const handleDelete = (_id) => {
      console.log(_id);
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