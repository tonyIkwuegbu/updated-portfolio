import "./style.css";

const About: React.FC = () => {
  return (
    <div className="about my-4 justify-center">
      <h1 className="hover:underline font-cant text-gray-500 font-semibold text-xl lg:text-2xl">Bio</h1>
      <p className="text-lg lg:text-xl font-spec tracking-wide">
        I'm a Software Developer on Front-end speciality. Over the course of my
        career in development, i've had experience building aesthetically
        appealing and functional products with Javascript technologies. I have
        provided web solutions to individuals and organizations which include
        but not limited to designing, developing web based applications,
        incorporating various technologies to deliver exceptional customer
        experiences in a highly collaborative work environment.
      </p>
      <br />

      <p className="text-lg lg:text-xl font-spec tracking-wide">
        My core values are honesty, loyalty, teamwork etc. I look forward to
        working with cutting-edge technologies in corporations, adding value to
        organizational growth and development through dynamic and innovative
        skills with the aim of achieving corporate goals and objectives. 
      
      </p>
    </div>
  );
};

export default About;