import { Link } from "react-router-dom";
import { baseURL } from "../utils/ configs";

const Card = ({ cardData }) => {
  return (
    <>
      {/* <div className="border-amber-100 shadow m-5 card bg-base-100 w-80  hover:cursor-grab hover:shadow-xl">
        <figure>
          <img
            src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Fresh Muscles</h2>
        </div>
      </div> */}
    <button onClick={() => document.getElementById("my_modal_4").showModal()}>
        <div className="card bg-base-100 w-96 h-80 shadow-sm">
        <figure className="h-80">
          <img
            src={
              cardData.recipe_image.includes("://")
                ? cardData.recipe_image
                : baseURL + "storage/" + cardData.recipe_image
            }
            alt={cardData.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{cardData.name}</h2>
        </div>
      </div>
    </button>
    </>
  );
};
export default Card;
