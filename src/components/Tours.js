const Tours = ({ id, date, title, icon, days, cost, img, country }) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
            </span>{" "}
            {country}
          </p>
          <p>{days}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tours;
