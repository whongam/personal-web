import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("02/16/2001");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            This is <span className="text-yellow-600">Ken Wong,</span> a Programming
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I love playing the guitar, hiking and bouldering. I am
            currently pursuing a CS degree in CityU. I am {getDate()}{" "}
            years old. I love exploring new technologies.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently open for jobs. I am also a backend developer.
            I worked on reactJs, JavaScript, Java and many more. I am
            also looking to collaborate in open-source projects.
          </p>
        </div>

        <div
          class="relative flex-auto w-36   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          <div className="visible motion-safe:animate-zoomy lg:invisible ">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://lottie.host/e2fe48f4-e961-46c3-b044-96501b9e14cb/K4YOBSG6NB.json"
              style={{ width: "400px" }}
            />
          </div>

          <a
            href={require("../../assets/resume/CV WONG Ho Nam.pdf")}
            download={"Ken Resume"}
            target="_blank"
            rel="noreferrer"
            className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
