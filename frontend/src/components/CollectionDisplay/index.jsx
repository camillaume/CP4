import { useState, useEffect } from "react";
import axios from "axios";
import CollectionCard from "@components/CollectionCard";
import CollectionForm from "@components/CollectionForm";
import SCollectionDisplay from "./style";

export default function CollectionDisplay() {
  const [affichage, setAffichage] = useState(false);
  const [collections, setCollections] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/collections/1`)
      .then(({ data }) => {
        setCollections(data);
      });
  }, []);
  if (!collections.length) {
    return null;
  }
  return (
    <SCollectionDisplay>
      <input
        type="button"
        className="newElement"
        value="Nouvelle collection"
        onClick={() => {
          if (!affichage) {
            setAffichage(true);
          } else {
            setAffichage(false);
          }
        }}
      />
      {affichage ? <CollectionForm /> : null}
      <h2>Tes collections :</h2>
      <div className="parent">
        {collections.map((collection) => {
          return <CollectionCard key={collection.id} collection={collection} />;
        })}
      </div>
    </SCollectionDisplay>
  );
}
