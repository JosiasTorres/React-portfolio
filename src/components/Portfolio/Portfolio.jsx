import Project from '../Project/Project';

const projects = [
  { title: "Proyecto 1", image: "https://via.placeholder.com/300", deploy: "#", repo: "#" },
  { title: "Proyecto 2", image: "https://via.placeholder.com/300", deploy: "#", repo: "#" },
  { title: "Proyecto 3", image: "https://via.placeholder.com/300", deploy: "#", repo: "#" },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;