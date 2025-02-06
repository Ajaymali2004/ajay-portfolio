import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { borderColor, fromColor, textColor } from "./color";

const Contact = ({ theme, accentColor }) => {
  return (
    <div className={`pt-10 ${theme ? "text-back" : "text-gray-300"}`}>
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold inline-block relative text-center sm:text-left">
        Contact Me
        <div
          className={`h-1 w-24 bg-gradient-to-r ${fromColor[accentColor]} to-transparent mt-2 mx-auto sm:mx-0`}
        ></div>
        <div
          className={`h-1 w-16 bg-gradient-to-r ${fromColor[accentColor]} to-transparent mt-1 mx-auto sm:mx-0`}
        ></div>
      </h1>

      <p className="text-lg mt-8 text-center sm:text-left">
        Let's connect and discuss exciting opportunities, collaborations, or
        just to chat! I'm always open to connecting with like-minded people.
      </p>
      <p className="text-lg mt-4 text-center sm:text-left">
        Feel free to reach out to me via any of the platforms below.
      </p>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {/* Email Section */}
        <div className="flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className={`${textColor[accentColor]} mb-4`}>
            <FaEnvelope size={40} />
          </div>
          <p className="font-semibold text-lg">Email</p>
          <a
            href="mailto:ajays95372@gmail.com"
            className={`text-lg ${textColor[accentColor]} hover:underline`}
          >
            ajays95372@gmail.com
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className={`${textColor[accentColor]} mb-4`}>
            <FaLinkedin size={40} />
          </div>
          <p className="font-semibold text-lg">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/ajay-mali22/"
            target="_blank"
            className={`text-lg ${textColor[accentColor]} hover:underline`}
          >
            linkedin.com/in/ajay-mali22
          </a>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className={`${textColor[accentColor]} mb-4`}>
            <FaInstagram size={40} />
          </div>
          <p className="font-semibold text-lg">Instagram</p>
          <a
            href="https://www.instagram.com/ajayyy.solanki/?igsh=MTI3ejNhZzBrMnp2bw%3D%3D#"
            target="_blank"
            className={`text-lg ${textColor[accentColor]} hover:underline`}
          >
            @ajayyy.solanki
          </a>
        </div>
      </div>

      {/* Button Section (Optional) */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1oR6qrHTZhxGfMKZu4XVXsnoca6R6AbJh/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`px-6 py-3 rounded-lg border-2 ${borderColor[accentColor]} ${textColor[accentColor]} font-semibold hover:scale-105 hover:cursor-pointer ${theme ? "hover:text-black" : "hover:text-gray-300"} transition-all`}
          >
            My Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
