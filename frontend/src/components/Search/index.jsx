import axios from "axios";
import { useState, useEffect } from "react";
import IssueCard from "@components/IssueCard";
import FormIssue from "@components/FormIssue";
import SSearch from "./style";

export default function Search() {
  const [collections, setCollections] = useState([]);
  const [formData, setFormData] = useState({
    number: "",
    collectionId: "",
    userId: 1,
  });

  const userId = 1;
  const [issues, setIssues] = useState([]);
  const [button, setButton] = useState(false);
  const [affichage, setAffichage] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/collections/${userId}`,
        formData
      )
      .then(({ data }) => {
        setCollections(data);
      });
  }, []);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/issues/bynumber`, formData)
      .then(({ data }) => {
        if (data !== undefined) {
          setIssues(data);
          setButton(true);
        } else {
          setButton(true);
        }
      });
  };

  if (!collections.length) {
    return null;
  }
  return (
    <SSearch>
      <select name="collectionId" onChange={hChange}>
        <option value="">Choisis une de tes collections</option>
        {collections.map((collection) => (
          <option value={collection.id} key={collection.id}>
            {collection.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Numéro"
        value={formData.number}
        name="number"
        onChange={hChange}
      />
      <input type="button" onClick={hSubmit} value="Est-ce que je l'ai?" />
      {issues.length
        ? issues.map((issue) => {
            return <IssueCard issue={issue} key={issue.id} />;
          })
        : null}
      {button && (
        <input
          type="button"
          value="Veux tu l'acheter?"
          onClick={() => {
            setAffichage(true);
          }}
        />
      )}
      {affichage ? (
        <FormIssue numero={formData.number} collecId={formData.collectionId} />
      ) : null}
    </SSearch>
  );
}
