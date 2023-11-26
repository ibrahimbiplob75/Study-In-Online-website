import PropTypes from "prop-types";

const Submission = ({ assign }) => {
  const {  title,userEmail  } = assign;
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
              
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>
        {userEmail}
        <br />
      </td>

      <th>
        <button className="btn text-green-200 bg-green-700 btn-xs ml-2 mt-2 sm:btn-sm md:btn-md lg:btn-lg">
          Result
        </button>
      </th>
    </tr>
  );
};
Submission.propTypes={
    assign:PropTypes.obj,
}

export default Submission;
