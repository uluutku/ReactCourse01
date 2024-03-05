import Rabbit1 from "./images/rabbit1.jpg";
import Rabbit2 from "./images/rabbit2.jpg";
import Rabbit3 from "./images/rabbit3.jpg";
import Rabbit4 from "./images/rabbit4.jpg";

const rabbitMap = {
    Rabbit1, Rabbit2, Rabbit3, Rabbit4
};

function Rabbit({ rabbitName }) {
    return (
        <>
        <div className="rabbit-card">
        <img className="rabbit-image" src={rabbitMap[rabbitName]} alt="Rabbit Image" />
        </div>
        </>
    );
}

export default Rabbit;
