import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "./DogDetails.css";

const DogDetails = (props) => {
  const params = useParams();
  if (!props.dog) return <NotFound />;
  return (
    <div className="DogDetails">
      <div>
        <p className="field">Name:</p>{" "}
        <p className="field-answer">{props.dog.name}</p>
      </div>
      <div>
        <p className="field"> Age:</p>{" "}
        <p className="field-answer">{props.dog.age}</p>
      </div>
      <div>
        <p className="field">Facts:</p>{" "}
        <div className="DogDetails facts">
          <ul>
            {props.dog.facts.map((fact) => (
              <li>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
