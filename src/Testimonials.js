import useFetch from "./useFetch";

const Testimonials = () => {
  const {
    data: testimonials,
    isPending,
    error,
  } = useFetch("http://localhost:8000/testimonials");

  if (testimonials) {
    return (
      <div className="testimonials">
        <h1>Testimonials</h1>
        {error && <div>{error}</div>}
        {isPending && <div>loading...</div>}

        {testimonials.map((testimonial) => (
          <div className="testimonial-preview" key={testimonial.id}>
            <p> {testimonial.bio}</p>
            {testimonial.name}
            <br />
            {testimonial.highschool}
            <br />
            {testimonial.college}
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="testimonials">
        <h1>Error</h1>
      </div>
    );
  }
};

export default Testimonials;
