
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/login.svg";


import Swal from "sweetalert2";
import axios from "axios";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";


const Login = () => {
    const { userSignIn, GmailLogin } = useContext(AuthProvider);
    const location=useLocation();
    const Navigate=useNavigate();


    const handleLogin=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        
        userSignIn(email, password)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have Loged-in Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const user = { email };
            axios
              .post("http://localhost:5000/jwt", user, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  Navigate(location?.state ? location?.state : "/");
                }
              });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
    }

    const googleLogin=()=>{
        GmailLogin()
          .then(() => {
            Navigate(location?.state ? location?.state : "/");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have Loged-in Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const user = {  };
            axios.post("", user, { withCredentials: true }).then((res) => {
              console.log(res.data);
              if (res.data.success) {
                Navigate(location?.state ? location?.state : "/");
              }
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col justify-between lg:flex-row">
            <div className="text-center lg:text-left mr-10">
              <img src={logo}></img>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center mt-3">
                Sign-In now!
              </h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login up!</button>
                </div>
              </form>
              <p className="text-center m-6">
                Not Register yet ? Please{" "}
                <Link
                  to="/register"
                  className="text-2xl text-bold text-green-600"
                >
                  Register
                </Link>{" "}
              </p>

              <button onClick={()=>googleLogin()} className="btn mb-3">
                
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;