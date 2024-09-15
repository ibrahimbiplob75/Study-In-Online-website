import { useLoaderData } from "react-router-dom";
import Submission from "../../Assignment/Submission/Submission"

const Submissions = () => {
    const assignments=useLoaderData();
    return (
      <div>
        <div className="overflow-x-auto m-4">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>User Email</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assign) => (
                <Submission
                  key={assign._id}
                  assign={assign}
                  
                ></Submission>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Submissions;