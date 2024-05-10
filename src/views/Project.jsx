import AboutProject from '../assets/img/project/About_Project.png';

export const Project = () => (
  <div className="generic-container">
    <div className="project">
      <div className="team-work__title">
        <h1 className="team-work__title-text">¿Por qué del proyecto?</h1>
        <h1 className="team-work__title-shadow">¿Por qué del proyecto?</h1>
      </div>
      <div className="project-content">
        <div className="project-content-text">
          <span className="project__text">
            Los estudiantes universitarios tienen diferentes estilos de vida que dependen de diversos factores, los cuales pueden o no incluir el deporte como
            parte de su rutina. Entre la amplia variedad de perfiles estudiantiles, aquellos que deciden participar en el deporte universitario se enfrentan a
            una serie de desafíos, ya sea por elección personal o por necesidad, y deben aprender a vivir con las repercusiones, tanto positivas como negativas
          </span>
          <span className="project__text">
            El deporte universitario implica asumir una responsabilidad que exige resultados, y para lograrlos, se requiere invertir tiempo, esfuerzo y
            determinación. Al relatar las historias de vida de los deportistas universitarios, con sus diferentes disciplinas, ramas deportivas y trasfondos
            personales, no solo obtenemos una visión más íntima de los requisitos de este estilo de vida, sino que también comprendemos las motivaciones detrás
            de la elección voluntaria de estos deportistas y lo que otros no ven desde sus propias perspectivas ajenas al deporte
          </span>
          <span className="project__text">
            Esta serie documental proporcionará una visión más profunda y completa del deporte universitario, dirigida tanto a espectadores interesados en
            series documentales no exclusivamente deportivas como a deportistas que aspiran al alto rendimiento. Además, será una oportunidad para cualquier
            persona que desee explorar estas fascinantes historias de vida, permitiéndoles empatizar, reflexionar y discutir diferentes perspectivas y
            opiniones. A través de esta serie, se mostrará que el deporte universitario no solo implica desafíos cotidianos, sino que también representa un
            compromiso profundo que afecta el equilibrio y la vida de aquellos que eligen este estilo de vida voluntariamente.
          </span>
        </div>
        <img className="project__image" src={AboutProject} alt="About the project" />
      </div>
    </div>
  </div>
);
