export const Contact = () => {
  const sendEmail = () => {
    const mailto = 'Desafiandoelequilibriodu@gmail.com';
    const subject = '¡Quiero Desafiar el equilibrio!';
    const body = '¡Hola! Cuéntame más acerca de este proyecto y como puedo participar.';
    return `mailto:${mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-cotainer">
      <div className="team-work__title contact-title-1">
        <h1 className="team-work__title-text">Desafiando el equilibrio</h1>
        <h1 className="team-work__title-shadow">Desafiando el equilibrio</h1>
      </div>
      <span className="contact-text">Es un proyecto que quiere contar las historias de vida de los deportistas universitarios.</span>
      <div className="team-work__title contact-title-2">
        <h1 className="team-work__title-text">Recuerda que</h1>
        <h1 className="team-work__title-shadow">Recuerda que</h1>
      </div>
      <span className="contact-text">Si quieres dejarnos tú opinión, ser parte de nuestro equipo de trabajo o contar tú historia puedes contactarnos a:</span>
      <div className="team-work__title contact-title-3" onClick={() => (window.location = sendEmail())}>
        <h1 className="team-work__title-text">Desafiandoelequilibriodu@gmail.com</h1>
        <h1 className="team-work__title-shadow">Desafiandoelequilibriodu@gmail.com</h1>
      </div>
      <span className="contact-text">¡No dudes en escribirnos!</span>
    </div>
  );
};
