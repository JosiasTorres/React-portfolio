const Project = ({ title, image, deploy, repo }) => {
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>
          <a href={deploy} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
          <a href={repo} target="_blank" rel="noopener noreferrer"> GitHub Repo</a>
        </p>
      </div>
    );
  };
  
  export default Project;