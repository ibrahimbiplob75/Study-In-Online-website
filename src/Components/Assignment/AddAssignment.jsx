import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthProvider } from "../../ContextProvider/ContextProvider";

const AddAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthProvider)


    const handleAddAssignment = (event) => {
         event.preventDefault();

         const form = event.target;

        const title=form.title.value;
        const mark=form.marks.value;
        const description=form.description.value;
        const level=form.level.value;
        const date = startDate;
        const photo=form.photo.value;
        const userEmail=user.email;
        const TaskBy=user?.name;

         axios
           .post("http://localhost:5000/assignments", {
             userEmail,
             title,
             mark,
             description,
             level,
             date,
             photo,
             TaskBy,
           })
           .then((res) => {
             if (res.data.insertedId) {
               Swal.fire({
                 title: "Success!",
                 text: "Your have added Assignment Successfully",
                 icon: "success",
                 confirmButtonText: "Ok",
               });
             }
           })
           .catch(() => {
             Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Something went wrong!",
               footer: '<a href="#">Why do I have this issue?</a>',
             });
           });
         
    };

    
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl text-center font-extrabold mb-4">
          Add a Assignment
        </h2>
        <form onSubmit={handleAddAssignment}>
          <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control mt-5 m-auto md:w-2/3 ">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="marks"
                placeholder="Assignment Marks"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">Assignment Description</span>
            </label>

            <input
              type="text"
              placeholder="Description"
              name="description"
              className="input input-bordered input-info w-full "
            />
          </div>

          <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">Assignment Level</span>
            </label>
            <label className="input-group">
              <select name="level" className="select select-info w-full ">
                <option disabled selected>
                  Select Level
                </option>
                <option name="level">Eassy</option>
                <option name="level">Medium</option>
                <option name="level">Hard</option>
              </select>
            </label>
          </div>  

        <div className="form-control mt-5 m-auto md:w-2/3 ">
            <label className="label">
              <span className="label-text">Thumbnail Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="thumbnail Image URL"
                className="input input-bordered w-full"
              />
            </label>
        </div>

         <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">Assignment Last date</span>
            </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date"
                className="input input-bordered input-info"
                type="text"
              />      
        </div>

        <div className="mt-5 m-auto md:w-2/3 ">
            <input
              type="submit"
              value="Add assignment"
              className="btn btn-block"
            />
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;
