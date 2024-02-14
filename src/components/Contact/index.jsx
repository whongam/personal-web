import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Contact() {
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { username, email, message } = e.target.elements;
    const { REACT_APP_SERVICEID, REACT_APP_TEMPLATE, REACT_APP_PUBLICKEY } = process.env;

    const templateParams = {
      username: username.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        REACT_APP_SERVICEID,
        REACT_APP_TEMPLATE,
        templateParams,
        REACT_APP_PUBLICKEY
      )
      .then(
        (response) => {
          setMailSent(true);
          setLoading(false);
          toast.success("Message Sent Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoading(false);
          toast.error("Error occured!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 my-100 min-h-screen ml-4 overflow-hidden"
    >
      <div className="text-5xl font-bold pt-10" data-aos={"fade"}>
        Drop Me A Message
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex-auto  md:w-32  sm:pl-0  overflow-visible">
          <form className="ml-2" onSubmit={handleSubmit} data-aos={"slide-up"}>
            <label class="block mb-2 text-2xl font-semibold mt-3  text-white ">
              Get in Touch
            </label>
            <hr className="border-cyan-700 border-2 w-1/3 mx-auto bg-cyan-700" />
            <div class="flex pt-9 justify-center">
              <span class="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <PersonIcon />
              </span>
              <input
                disabled={mailSent}
                readOnly={mailSent}
                id="username"
                name="user_name"
                required
                type="text"
                class="rounded-none rounded-r-lg  border block flex-1 min-w-[170px] max-w-[320px] text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
              />
            </div>
            <div class="flex pt-9 justify-center">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <AlternateEmailIcon />
              </span>
              <input
                disabled={mailSent}
                readOnly={mailSent}
                id="email"
                name="user_email"
                required
                minLength={5}
                type="email"
                class="rounded-none rounded-r-lg border block flex-1 min-w-[170px] w-full max-w-[320px] text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="flex pt-9 justify-center">
              <textarea
                id="message"
                name="message"
                disabled={mailSent}
                readOnly={mailSent}
                rows="4"
                required
                minLength={10}
                placeholder="Message"
                class="block h-40 text-white p-2.5 min-w-[215px] max-w-[365px] w-full text-sm rounded-lg border bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
              ></textarea>
            </div>
            <button
              title="SEND MESSAGE"
              type="submit"
              className={`${
                mailSent === false && loading === false ? "" : "hidden"
              } mt-7 py-2 px-4 rounded-md
              bg-blue-500 hover:bg-blue-700 focus:ring-blue-800
              `}
            >
            SEND MESSAGE
            </button>
            <button
              disabled
              type="button"
              className={`text-white ${
                loading === true ? "visible" : "hidden"
              } disabled font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 inline-flex items-center mt-5`}
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Sending...
            </button>
            <button
              type="button"
              disable={"true"}
              className={`bg-green-600 hover:bg-green-700 focus:ring-green-800 ${
                mailSent === true && loading === false ? "visible" : "hidden"
              } cursor-default  mt-7 py-2 px-4 rounded-md `}
            >
              Message Sent
            </button>
          </form>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
