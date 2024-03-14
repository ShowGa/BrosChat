import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-pink-600"> BrosChat</span>
        </h1>

        <form className="flex flex-col gap-2">
          <div>
            <label className="label p-2">
              <span className="text-gray-300 text-base label-text font-bold ">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
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
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
          <button className="btn btn-sm mt-2 text-lg">Login</button>
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
