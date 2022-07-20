import { useState, useEffect } from "react";
import axios from "axios";
import CollectionCard from "@components/CollectionCard";
import SCollectionDisplay from "./style";

export default function CollectionDisplay() {
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
      <h2>Tes collections :</h2>
      {collections.map((collection) => {
        return <CollectionCard key={collection.id} collection={collection} />;
      })}
    </SCollectionDisplay>
  );
}
