import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthProvider } from "../../../ContextProvider/ContextProvider";

import "@react-pdf-viewer/core/lib/styles/index.css";
import { Document, Page } from "react-pdf";
import { useLoaderData } from "react-router-dom";

const SubmitForm = () => {
  const { user } = useContext(AuthProvider);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const data=useLoaderData();
  console.log("Current user in submit",user);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setPdfFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPdfPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const SubmitAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const userEmail = user.email;
    const ass_id=data._id;
    const submitterBy = user?.displayName;
    const docFile = form.docFile;

   console.log(title,userEmail,submitterBy,docFile)
   const formData = new FormData();
   formData.append("pdfFile", pdfFile);
   formData.append("userEmail", userEmail);
   formData.append("title", title);
   formData.append("submitterBy", submitterBy);

    axios
      .post("http://localhost:5000/assignments/submit", {
        title,
        ass_id,
        userEmail,
        pdfFile,

      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have submitted the assignment successfully",
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
          Submit your Assignment
        </h2>
        <form onSubmit={SubmitAssignment}>
          <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={data.title}
                type="text"
                readOnly
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control mt-5 m-auto md:w-2/3">
            <label className="label">
              <span className="label-text">PDF File</span>
            </label>
            <label className="input-group">
              <input
                type="file"
                accept=".pdf"
                
                onChange={handleFileChange}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {pdfPreview && (
            <div className="mt-5 m-auto md:w-2/3">
              <Document file={pdfPreview}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )}

          <div className="mt-5 m-auto md:w-2/3">
            <input
              type="submit"
              value="Submit Assignment"
              className="btn btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
