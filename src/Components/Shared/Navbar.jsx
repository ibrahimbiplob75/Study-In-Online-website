import { Link } from "react-router-dom";
import user_avatar from "../../assets/user.jpg";
import logo from "../../assets/logoStudy.png"
import { useContext } from "react";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthProvider);
    const list = (
      <>
        <li>
          <Link className="text-xl font-inter" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/assignment">
            Create Assignment
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/allAssignment">
            Assignment
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/submission">
            Submission
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/">
            Contact
          </Link>
        </li>
      </>
    );
    const logOut = () => {
        userLogout().then(()=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2500
          })
          window.location.reload();
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        })
    };
    return (
      <div>
        <div>
          <div className="navbar bg-base-100 h-36 items-center w-full mx-auto p-10">
            <div className="navbar-start m-10">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {list}
                </ul>
              </div>
              <Link className="normal-case  text-xl w-3/4 lg:w-1/3">
                <img src={logo}></img>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{list}</ul>
            </div>

            <div className="navbar-end md:mr-12">
              {user ? (
                <div className="dropdown dropdown-end ml-3 ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user_avatar} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>{<Link onClick={logOut}>Logout</Link>}</li>
                  </ul>
                </div>
              ) : (
                <Link to="/register">
                  <button className="btn btn-outline btn-error ml-3">
                    SignUp
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;