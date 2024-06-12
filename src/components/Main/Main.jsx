import Card from "../Cards/Card"
import mainStyle from './Main.module.css'


function Main() {

    return (
      <>
        <main className={mainStyle.pageMain}>
          <div className="container">
            <div className={mainStyle.cards}>
              <Card/>
            </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Main
  