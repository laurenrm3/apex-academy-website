const Tutors = ({ tutors, title }) => {
  return (
    <div className="tutors">
      <h2>{title}</h2>
      {tutors.map((tutor) => (
        <div className="tutor-preview" key={tutor.id}>
          <h4>{tutor.name}</h4>
          <h5>{tutor.college}</h5>
          <p> {tutor.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Tutors;
