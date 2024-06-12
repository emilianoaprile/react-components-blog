import cardStyle from "./Card.module.css";

function Card() {
  const cards = [
    {
      id: 1,
      title: "Titolo1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      title: "Titolo2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      title: "Titolo3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      id: 4,
      title: "Titolo4",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      id: 5,
      title: "Titolo5",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      id: 6,
      title: "Titolo6",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div className={cardStyle.card} key={card.id}>
          <div className={cardStyle.cardImage}>
            <img src={card.image} alt="" />
          </div>
          <div className={cardStyle.cardContent}>
            <h2 className="cardTitle">{card.title}</h2>
            <p className="cardText">{card.text}</p>
            <button className={cardStyle.cardBtn}>LEGGI DI PIÙ</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
