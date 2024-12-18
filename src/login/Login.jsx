import { useNavigate } from "react-router";

const Login = ({setLogIn}) => {


  const handleLogin=()=>{
    setLogIn(true)
}
// const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default
    handleLogin()
    // navigate("/"); 
  };

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <form
        className="bg-white/90 p-6 pb-10 w-full max-w-md rounded-lg backdrop-blur-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-700">
          Enter Screen ID
        </h2>
        <p className="text-gray-600">Enter Screen ID to recieve your content on this device</p>

        {/* ID Input */}
        <div className="mt-6">
          <label htmlFor="email" className="block text-gray-700 font-bold">
           Screen ID
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter or paste your ID"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>



        {/* Submit Button */}
        <div className=" mt-10 flex justify-center">
        <button
          type="submit"
          className=" w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"

        >
          Activate
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;