import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthProvider } from "../../../ContextProvider/ContextProvider";

const Assignment = ({ assign, handleDelete, handleUpdate }) => {
  const { user } = useContext(AuthProvider);
  const LoogeduserEmail = user.email;
  const assignmentUser = assign.userEmail;

  

  const { _id, title, level, mark, date, photo, description, TaskBy } = assign;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>
        {description}
        <br />
        <span className="badge badge-ghost badge-sm">{TaskBy}</span>
        <span className="text-red m-2">{mark}</span>
      </td>
      <td>{level}</td>
      <td>{date}</td>
      <th>
        {LoogeduserEmail == assignmentUser ? (
          <div>
            <button
              onClick={() => handleUpdate(_id)}
              className="btn text-yellow-200 bg-yellow-700 btn-xs ml-2 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-red-200 bg-red-700 btn-xs ml-2 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Delete
            </button>
          </div>
        ) : (
          <button className="btn text-green-200 bg-green-700 btn-xs ml-2 mt-2 sm:btn-sm md:btn-md lg:btn-lg">
            Submit Task
          </button>
        )}
      </th>
    </tr>
  );
};

Assignment.propTypes = {
  assign: PropTypes.obj,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default Assignment;
