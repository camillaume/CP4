import { useState, useEffect } from "react";
import axios from "axios";
import IssueCard from "@components/IssueCard";
import { useParams } from "react-router-dom";
import FormIssue from "@components/FormIssue";
import SIssueDisplay from "./style";

export default function IssueDisplay() {
  const [affichage, setAffichage] = useState(false);
  const [issues, setIssues] = useState([]);
  const [collectionName, setCollectionName] = useState("");
  const collectionId = useParams();
  const collectionIdNumber = parseInt(collectionId.id, 10);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/collections/name/${collectionIdNumber}`
      )
      .then(({ data }) => {
        setCollectionName(data.name);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/issues/${collectionIdNumber}`)
      .then(({ data }) => {
        setIssues(data);
      });
  }, []);

  if (!issues.length) {
    return (
      <SIssueDisplay>
        <div className="void">
          <h2>{`Tes Numéros de ${collectionName} :`}</h2>
          <p>Ta collection est actuellement vide</p>
          <input
            type="button"
            className="newElement"
            value="Nouveau numéro"
            onClick={() => {
              if (!affichage) {
                setAffichage(true);
              } else {
                setAffichage(false);
              }
            }}
          />
          {affichage ? <FormIssue collecId={collectionIdNumber} /> : null}
        </div>
      </SIssueDisplay>
    );
  }
  return (
    <SIssueDisplay>
      <input
        type="button"
        className="newElement"
        value="Nouveau numéro"
        onClick={() => {
          if (!affichage) {
            setAffichage(true);
          } else {
            setAffichage(false);
          }
        }}
      />
      {affichage ? <FormIssue collecId={collectionIdNumber} /> : null}
      <h2>{`Tes Numéros de ${collectionName} :`}</h2>
      <div className="parent">
        {issues.map((issue) => {
          return <IssueCard key={issue.id} issue={issue} />;
        })}
      </div>
    </SIssueDisplay>
  );
}
