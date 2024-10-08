import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/login.svg';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthProvider } from '../../ContextProvider/ContextProvider';
import axios from 'axios';

const Register = () => {
  const Navigate=useNavigate()
  const {userSignUp}=useContext(AuthProvider);


    const handleRegister=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const name=data.get("name");
        const user_name = data.get("user_name");
        const email=data.get("email");
        const photo = data.get("profile");
        const password=data.get("password");
        console.log(name, user_name,email,photo,password);

        userSignUp(email, password)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have registered Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            axios
              .post("http://localhost:5000/users", {
                name: name,
                user_name: user_name,
                email: email,
                photo: photo,
                password: password,
              })
              .then(function (response) {
                console.log(response);
                Navigate("/")
              })
              .catch(function (error) {
                console.log(error);
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
                Signup now!
              </h1>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User name"
                    name="user_name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile photo</span>
                  </label>
                  <input
                    type="text"
                    name="profile"
                    placeholder="profile photo"
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
                  <button className="btn btn-primary">Sign up!</button>
                </div>
              </form>
              <p className="text-center m-6">
                Already Register ? Please{" "}
                <Link
                  to="/login"
                  className="text-2xl text-bold text-green-600"
                >
                  LOGIN
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;