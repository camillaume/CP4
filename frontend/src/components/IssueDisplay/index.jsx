import { useState, useEffect } from "react";
import axios from "axios";
import IssueCard from "@components/IssueCard";
import { useParams } from "react-router-dom";
import SIssueDisplay from "./style";

export default function IssueDisplay() {
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
    return null;
  }
  return (
    <SIssueDisplay>
      <h2>Tes Numéros :</h2>
      {issues.map((issue) => {
        return <IssueCard key={issue.id} issue={issue} />;
      })}
    </SIssueDisplay>
  );
}
