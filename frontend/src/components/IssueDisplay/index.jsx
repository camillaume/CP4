import { useState, useEffect } from "react";
import axios from "axios";
import IssueCard from "@components/IssueCard";
import { useParams } from "react-router-dom";
import FormIssue from "@components/FormIssue";
import SIssueDisplay from "./style";

export default function IssueDisplay() {
  const [affichage, setAffichage] = useState(false);
  const [issues, setIssues] = useState([]);
  const collectionId = useParams();
  const collectionIdNumber = parseInt(collectionId.id, 10);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/issues/${collectionIdNumber}`)
      .then(({ data }) => {
        setIssues(data);
      });
  }, []);

  if (!issues.length) {
    return (
      <>
        <input
          type="button"
          value="Nouveau numéro"
          onClick={() => {
            setAffichage(true);
          }}
        />
        {affichage ? <FormIssue collecId={collectionIdNumber} /> : null}
      </>
    );
  }
  return (
    <SIssueDisplay>
      <input
        type="button"
        value="Nouveau numéro"
        onClick={() => {
          setAffichage(true);
        }}
      />
      {affichage ? <FormIssue collecId={collectionIdNumber} /> : null}
      <h2>Tes Numéros :</h2>
      {issues.map((issue) => {
        return <IssueCard key={issue.id} issue={issue} />;
      })}
    </SIssueDisplay>
  );
}
