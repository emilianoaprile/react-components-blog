import cardStyle from "./Card.module.css";

function Card() {
  const card = [
    {
      title: "Titolo1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Titolo2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Titolo3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Titolo4",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Titolo5",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Titolo6",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quae.",
      image: "https://picsum.photos/200/200",
    },
  ];

  return (
    <>
      {card.map((item) => (
        <div className={cardStyle.card}>
          <div className={cardStyle.cardImage}>
            <img src={item.image} alt="" />
          </div>
          <div className={cardStyle.cardContent}>
            <h2 className="cardTitle">{item.title}</h2>
            <p className="cardText">{item.text}</p>
            <button className={cardStyle.cardBtn}>LEGGI DI PIÙ</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
