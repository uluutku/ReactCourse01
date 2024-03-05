import "bulma/css/bulma.css";

import Course from "./Course"

import resim1 from "./images/rabbit1.jpg"
import resim2 from "./images/rabbit2.jpg"
import resim3 from "./images/rabbit3.jpg"
import resim4 from "./images/rabit4.jpg"

function App() {

  return (
    <>
    <section class="hero is-link">
      <div className="hero-body">
        <p className="title">
          Kurslarım
        </p>
      </div>
    </section>


    <div className="container">

      <div className="columns">
        <div className="colunm">
          <Course title="Angular" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ut." image={resim1}/>
        </div>

        <div className="colunm">
          <Course title="Bootstrap 5" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ut."image={resim2} />
        </div>

        <div className="colunm">
          <Course title="Komple Web" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ut." image={resim3}/>
        </div>

        <div className="colunm">
          <Course title="Angular" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ut." image={resim4} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
