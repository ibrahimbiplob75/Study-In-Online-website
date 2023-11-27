import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../ContextProvider/ContextProvider";
import { Link } from "react-router-dom";

const Assignment = ({ assign, handleDelete, handleUpdate }) => {
  const { user } = useContext(AuthProvider);
  const LoogeduserEmail = user.email;
  const assignmentUser = assign.userEmail;
  const [submitted ,setSubmitted]=useState(false);

  useEffect(()=>{
    fetch("https://friends-group-study-server.vercel.app/submited",{credentials:"include"})
    .then(res=>res.json())
    .then(data => {
      console.log("check",data );
      data.forEach((submission) => {
        if (assign._id === submission.ass_id ) {
          console.log("submitted");
          setSubmitted(true);
        }
      });
    })
    .catch((error)=>{
      console.log(error);
    });

  },[])

  

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
            <Link to={`/updateAssignment/${_id}`}>
              <button
                onClick={() => handleUpdate(_id)}
                className="btn text-yellow-200 bg-yellow-700 btn-xs ml-2 sm:btn-sm md:btn-md lg:btn-lg"
              >
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-red-200 bg-red-700 btn-xs ml-2 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            {submitted ? (
              <Link to={`/submission`}>
                <button className="btn text-green-200 bg-slate-400 btn-xs ml-2 mt-2 sm:btn-sm md:btn-md lg:btn-lg">
                  See Result
                </button>
              </Link>
            ) : (
              <Link to={`/assingment/submit/${_id}`}>
                <button className="btn text-green-200 bg-green-700 btn-xs ml-2 mt-2 sm:btn-sm md:btn-md lg:btn-lg">
                  Submit Task
                </button>
              </Link>
            )}
          </div>
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
