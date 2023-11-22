import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";


const Assignments = () => {
    const assignments=useLoaderData();
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Title</th>
                <th>Description</th>
                <th>level</th>
                <th>Submission Time Remaining</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assign) => (
                <Assignment key={assign._id} assign={assign}></Assignment>
              ))}
            </tbody>
          </table>
        </div>
        ;
      </div>
    );
};

export default Assignments;