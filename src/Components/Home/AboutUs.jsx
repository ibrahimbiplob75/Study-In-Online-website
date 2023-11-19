import person from "../../assets/2.jpg";
import parts from "../../assets/3.jpg";

const AboutUs = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200 w-4/5 m-auto rounded-2xl mt-10 mb-5">
          <div className="hero-content  flex-col lg:flex-row">
            <div className="relative lg:w-2/3">
              <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
              <img
                src={parts}
                className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white "
              />
            </div>

            <div className="lg:w-1/3 space-y-5 p-4">
              <h3 className="text-4xl text-orange-500 font-bold">About Us</h3>
              <h1 className="text-2xl font-bold">
                Group study brings together individuals with different
                perspectives, knowledge, and approaches to problem-solving
              </h1>
              <p className="py-6">
                Engaging in online group study exposes participants to a diverse
                network of individuals. This network can be valuable for sharing
                resources, gaining insights, and potentially collaborating on
                future projects or academic endeavors. While online group study
                offers these benefits, it is essential for participants to
                establish effective communication channels, set clear goals, and
                maintain a balance between group interaction and individual
                study.
              </p>
             
              <button className="btn btn-warning">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;