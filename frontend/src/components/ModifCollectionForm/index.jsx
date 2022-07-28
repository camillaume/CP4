import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import SModifCollectionForm from "./style";

export default function ModifCollectionForm({ collections }) {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    img: "",
    description: "",
    collectionId: "",
    userId: 1,
  });
  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/collections`, formData)
      .then(({ data }) => {
        console.warn(data);
        toast.success("Félicitations, votre collection est actualisée", {
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
    <SModifCollectionForm action="" onSubmit={hSubmit} className="form">
      <fieldset>
        <select name="collectionId" onChange={hChange}>
          <option value="">Choisis la collection à actualiser</option>
          {collections.map((collection) => {
            return (
              <option value={collection.id} key={collection.id}>
                {collection.name}
              </option>
            );
          })}
        </select>
        {collections
          .filter((collection) => {
            return parseInt(formData.collectionId, 10) === collection.id;
          })
          .map((collectionInfo) => {
            return setFormData(collectionInfo);
          })}
        <div key={formData.collectionId}>
          <input
            type="text"
            placeholder={
              formData.name === "" ? "nom de la collection" : formData.name
            }
            value={formData.name}
            name="name"
            onChange={hChange}
          />
          <input
            type="text"
            placeholder={formData.author === "" ? "auteur" : formData.author}
            value={formData.author}
            name="author"
            onChange={hChange}
          />
          <input
            type="text"
            placeholder={formData.img === "" ? "image" : formData.img}
            value={formData.img}
            name="img"
            onChange={hChange}
          />
          <input
            type="text"
            placeholder={
              formData.description === "" ? "description" : formData.description
            }
            value={formData.description}
            name="description"
            onChange={hChange}
          />
          <input
            type="submit"
            className="submit"
            value="Modfier cette collection"
          />
        </div>
      </fieldset>
    </SModifCollectionForm>
  );
}
ModifCollectionForm.propTypes = {
  collections: PropTypes.arrayOf([]).isRequired,
};
