import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import SCollectionForm from "./style";

export default function CollectionForm() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    img: "",
    description: "",
    userId: 1,
  });

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/collections`, formData)
      .then(({ data }) => {
        console.warn(data);
        toast.success("Félicitations, votre collection est créée", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error("Une erreur s'est produite", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <SCollectionForm action="" onSubmit={hSubmit} className="form">
      <fieldset>
        <input
          type="text"
          placeholder="Nom de ta collection"
          value={formData.name}
          name="name"
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={formData.author}
          name="author"
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Image"
          value={formData.img}
          name="img"
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          name="description"
          onChange={hChange}
        />
        <input type="submit" className="submit" value="Créer une collection" />
      </fieldset>
    </SCollectionForm>
  );
}
