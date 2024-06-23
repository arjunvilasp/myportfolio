import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-container">
      <div className="first">
        <img className="one" src="/img3.jpg" alt="img" />
        <div className="shadow"></div>
      </div>
      <div className="second">
        <h1>About Me</h1>
        <p>
          An MCA graduate with a strong foundation in computer science and
          applications, who is an aspiring software developer driven by a
          passion for creating innovative and efficient software solutions.
          Proficient in software development, and has hands-on experience in
          developing web and mobile applications, as well as a deep
          understanding of database management and system design. With a keen
          eye for detail and a commitment to continuous learning, and
          dedicated to leveraging my skills to contribute to cutting-edge
          projects and thrive in dynamic, tech-driven environments.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
