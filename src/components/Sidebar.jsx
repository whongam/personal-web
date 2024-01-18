import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
// import { Email } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  const [select, setSelect] = useState(0);

  const scroll = (section) => {
    if (section === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex-none hidden lg:block  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <NavLink to={"/#"}>
            <img
              src={require("../assets/images/myImage.jpg")}
              alt="Ken Wong"
              className="rounded-full border-solid cursor-pointer  border-[4px] border-stone-600 min-h-auto mx-auto  max-w-[190px]"
            />
            <h3 className="text-white name py-4 font-medium ">
              Ken Wong
            </h3>
          </NavLink>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <NavLink
            to="#"
            onClick={() => {
              scroll("#");
            }}
          >
            <p title="Home Page"> Home</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-600 " : ""
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <NavLink
            to="#about"
            onClick={() => {
              scroll("about");
            }}
          >
            <p title="About me"> About Me</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <NavLink
            to="#resume"
            onClick={() => {
              scroll("resume");
            }}
          >
            <p title="Resume"> Resume</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <NavLink
            to="#projects"
            onClick={() => {
              scroll("projects");
            }}
          >
            <p title="Projects"> Projects</p>
          </NavLink>
        </p>

      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          title="Github"
          onClick={() =>
            window.open("https://github.com/whongam", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          title="Instagram"
          onClick={() =>
            window.open("https://www.instagram.com/whongam", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          title="Linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/wonghonam/",
              "_blank"
            )
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>

        <div
          title="Discord"
          onClick={() =>
            window.open(
              "https://discordapp.com/users/285071441743839234/",
              "_blank"
            )
          }
        >
          {" "}
          <EmailIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
