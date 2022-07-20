import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SCollectionCard from "./style";

export default function CollectionCard({ collection }) {
  return (
    <div className="container">
      <SCollectionCard>
        <Link to={`/collection/${collection.id}`}>
          <figure>
            <picture>
              <img src={collection.img} alt="" />
            </picture>
          </figure>
          <h3>{collection.name}</h3>
          <h4>{collection.author}</h4>
          <p>{collection.description}</p>
        </Link>
      </SCollectionCard>
    </div>
  );
}
CollectionCard.propTypes = {
  collection: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    user_id: PropTypes.number,
  }),
};
CollectionCard.defaultProps = {
  collection: PropTypes.shape({
    author: "",
    description: "",
    id: "",
    img: "",
    name: "",
    user_id: "",
  }),
};
