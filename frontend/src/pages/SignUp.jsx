import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  // console.log(inputData);

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    if (e.target.id === "female" || e.target.id === "male") {
      setInputData({ ...inputData, gender: e.target.id });
      return;
    }

    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-pink-600">BrosChat</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className="label p-2">
              <span className="text-gray-300 text-base label-text font-bold ">
                Full name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={inputData.fullName}
              id="fullName"
              onChange={handleChange}
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
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
              id="username"
              onChange={handleChange}
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
              id="password"
              onChange={handleChange}
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-300 text-base label-text font-bold ">
                Confirm password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              value={inputData.confirmPassword}
              id="confirmPassword"
              onChange={handleChange}
              className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
            />
          </div>
          <div className="flex justify-evenly">
            <div>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text text-pink-600 font-bold">
                  Female
                </span>
                <input
                  type="checkbox"
                  className="checkbox border-white"
                  checked={inputData.gender === "female"}
                  id="female"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label className="label gap-2 cursor-pointer">
                <span className="label-text text-sky-600 font-bold">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-white"
                  checked={inputData.gender === "male"}
                  id="male"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button className="btn btn-sm mt-2 text-lg">Sign Up</button>
        </form>
        <div className="inline-block mt-3">
          <span className="text-gray-200">Already have an account ? </span>
          <Link
            to="/"
            className="text-sky-500 font-bold transition-all duration-200 border-opacity-0 border-b-2 border-b-sky-600 hover:border-opacity-100 inline-block"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React from "react";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-pink-600">BrosChat</span>
//         </h1>
//         <form className="flex flex-col gap-2">
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-300 text-base label-text font-bold ">
//                 Full name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Your full name"
//               className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
//             />
//           </div>
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
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-300 text-base label-text font-bold ">
//                 Confirm password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter confirm password"
//               className="text-pink-600 w-full input input-bordered h-10 caret-pink-500 bg-black bg-opacity-70 placeholder:text-gray-600"
//             />
//           </div>
//           <div className="flex justify-evenly">
//             <div>
//               <label className="label gap-2 cursor-pointer">
//                 <span className="label-text text-pink-600 font-bold">
//                   Female
//                 </span>
//                 <input type="checkbox" className="checkbox border-white" />
//               </label>
//             </div>
//             <div>
//               <label className="label gap-2 cursor-pointer">
//                 <span className="label-text text-sky-600 font-bold">Male</span>
//                 <input type="checkbox" className="checkbox border-white" />
//               </label>
//             </div>
//           </div>
//           <button className="btn btn-sm mt-2 text-lg">Sign Up</button>
//         </form>
//         <div className="inline-block mt-3">
//           <span className="text-pink-600">Already have an account ? </span>
//           <Link
//             to="/"
//             className="text-sky-500 font-bold transition-all duration-200 border-opacity-0 border-b-2 border-b-sky-600 hover:border-opacity-100 inline-block"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
