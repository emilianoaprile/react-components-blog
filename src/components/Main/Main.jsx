import Card from "../Cards/Card"
import mainStyle from './Main.module.css'


function Main() {

    return (
      <>
        <main className={mainStyle.pageMain}>
          <div className={mainStyle.container}>
            <div className="cards">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Main
  