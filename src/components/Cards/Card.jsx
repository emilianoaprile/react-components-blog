function Card() {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className="cardContent">
            <h2 className="cardTitle">Titolo</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            quae.
          </p>
          <button className="cardBtn">LEGGI DI PIÙ</button>
        </div>
      </div>
    </>
  );
}

export default Card;
