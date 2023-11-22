import PropTypes from "prop-types";

const Assignment = ({ assign }) => {
  const { title, level, mark, date, photo, description, TaskBy } = assign;
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
        <button className="btn btn-xs ml-2 sm:btn-sm md:btn-md lg:btn-lg">
          Update
        </button>
        <button className="btn btn-xs ml-2 mt-2 sm:btn-sm md:btn-md lg:btn-lg">
          Delete
        </button>
      </th>
    </tr>
  );
};

Assignment.propTypes={
    assign:PropTypes.obj
}

export default Assignment;
