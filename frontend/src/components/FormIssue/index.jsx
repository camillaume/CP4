import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PropTypes from "prop-types";
import SFormIssue from "./style";

export default function FormIssue({ collecId }) {
  const [states, setStates] = useState("");
  const [formData, setFormData] = useState({
    number: "",
    title: "",
    author: "",
    year: "",
    img: "",
    description: "",
    collectionId: collecId,
    state: "",
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/states`).then(({ data }) => {
      setStates(data);
    });
  }, []);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/issues`, formData)
      .then(() => {
        toast.success("Félicitations, le numéro a été ajouté à ta collection", {
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
    <SFormIssue action="" onSubmit={hSubmit} className="form">
      {states && (
        <fieldset>
          <input
            type="text"
            placeholder="Numéro"
            value={formData.number}
            name="number"
            onChange={hChange}
          />
          <input
            type="text"
            placeholder="Titre"
            value={formData.title}
            name="title"
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
            placeholder="Année"
            value={formData.year}
            name="year"
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
          <select name="state" onChange={hChange}>
            <option value={formData.select}>Etat du numéro</option>
            {states.map((state) => (
              <option value={state.id} key={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Créer un numéro" />
        </fieldset>
      )}
    </SFormIssue>
  );
}
FormIssue.propTypes = {
  collecId: PropTypes.number,
};
FormIssue.defaultProps = {
  collecId: "",
};
