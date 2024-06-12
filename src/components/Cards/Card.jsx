import cardStyle from './Card.module.css'

function Card() {
  return (
    <>
      <div className={cardStyle.card}>
        <div className={cardStyle.cardImage}>
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className={cardStyle.cardContent}>
            <h2 className="cardTitle">Titolo</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            quae.
          </p>
          <button className={cardStyle.cardBtn}>LEGGI DI PIÙ</button>
        </div>
      </div>
    </>
  );
}

export default Card;
