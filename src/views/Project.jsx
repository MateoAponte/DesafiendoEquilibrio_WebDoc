import AboutProject from '../assets/img/project/About_Project.png';

export const Project = () => (
  <div className="generic-container">
    <div className="project">
      <div className="team-work__title">
        <h1 className="team-work__title-text">¿Por qué del proyecto?</h1>
        <h1 className="team-work__title-shadow">¿Por qué del proyecto?</h1>
      </div>
      <div className="project-content">
        <span className="project__text">
          Los estudiantes universitarios tienen diferentes estilos de vida que dependen de diversos factores, los cuales pueden o no incluir el deporte como
          parte de su rutina. Entre la amplia variedad de perfiles estudiantiles, aquellos que deciden participar en el deporte universitario se enfrentan a una
          serie de desafíos, ya sea por elección personal o por necesidad, y deben aprender a vivir con las repercusiones, tanto positivas como negativas
        </span>
        <img className="project__image" src={AboutProject} alt="About the project" />
      </div>
    </div>
  </div>
);
