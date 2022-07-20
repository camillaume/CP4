import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SIssueCard from "./style";

export default function IssueCard({ issue }) {
  return (
    <SIssueCard>
      <Link to={`/issue/${issue.id}`}>
        <title>{issue.number}</title>
        <figure>
          <picture>
            <img src={issue.img} alt="" />
          </picture>
        </figure>
        <h3>{issue.title}</h3>
        <h4>{issue.author}</h4>
        <p>{issue.year}</p>
        <p>{issue.stateName}</p>
        <p>{issue.description}</p>
      </Link>
    </SIssueCard>
  );
}
IssueCard.propTypes = {
  issue: PropTypes.shape({
    author: PropTypes.string,
    collection_id: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    number: PropTypes.number,
    stateName: PropTypes.string,
    stateId: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
  }),
};
IssueCard.defaultProps = {
  issue: PropTypes.shape({
    author: "",
    collection_id: "",
    description: "",
    id: "",
    img: "",
    number: "",
    stateName: "",
    state_id: "",
    title: "",
    year: "",
  }),
};
