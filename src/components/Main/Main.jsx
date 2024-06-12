import Card from "../Cards/Card"
import mainStyle from './Main.module.css'


function Main() {
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
        <main className={mainStyle.pageMain}>
          <div className="container">
            <div className={mainStyle.cards}>
              <Card cardProps={cards}/>
            </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Main
  