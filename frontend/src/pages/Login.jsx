import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth-service";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = inputData;
    if (!username || !password) {
      toast.error("Please complete the form !");
      return;
    }

    setLoading(true);
    AuthService.login(inputData)
      .then((res) => {
        toast.success("Login Successfully !");
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
        navigate("/");
      })
      .catch((e) => {
        const errMessage = e.response
          ? e.response.data.error
          : "Server Error! Please wait or contact us.";
        toast.error(errMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-pink-600"> BrosChat</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className="label p-2">
              <span className="text-gray-300 text-base label-text font-bold ">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={inputData.username}
              onChange={handleChange}
              id="username"
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-300 text-base label-text font-bold ">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={inputData.password}
              onChange={handleChange}
              id="password"
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
          <button disabled={loading} className="btn btn-sm mt-2 text-lg">
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login In"
            )}
          </button>
        </form>
        <div className="text-sky-500 font-bold mt-3 transition-all duration-200 border-opacity-0 border-b-2 border-b-sky-600 hover:border-opacity-100 inline-block">
          <Link to="/signup">Sign up an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-pink-600"> BrosChat</span>
//         </h1>

//         <form className="flex flex-col gap-2">
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-300 text-base label-text font-bold ">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-300 text-base label-text font-bold ">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
//             />
//           </div>
//           <button className="btn btn-sm mt-2 text-lg">Login</button>
//         </form>
//         <div className="text-sky-500 font-bold mt-3 transition-all duration-200 border-opacity-0 border-b-2 border-b-sky-600 hover:border-opacity-100 inline-block">
//           <Link to="/signup">Sign up an account</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
