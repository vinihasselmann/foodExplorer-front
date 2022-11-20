import { Container } from "./styles";
import { Button } from "../Button";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useState } from 'react'
export function FoodCard({ data }) {
    const [count, setCount] = useState(1);
  
    const imageURL = `${api.defaults.baseURL}files/${data.image}`;

  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <Container>
      <button className="edit-dish" onClick={() => handleEditDish(data.id)}>
        {user.is_admin === 1 && <BsPencil />}
      </button>

      <button type="button" onClick={() => handleDetails(data.id)}>
        <img className="foodImg" src={imageURL} alt={data.title} />

        <h3>{data.title}</h3>
      </button>
      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>

      <div>
        <button
          onClick={() => setCount((count) => count - 1)}
          className="stepper-btn"
        >
          -
        </button>
        <span className="count">{count}</span>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="stepper-btn"
        >
          +
        </button>
        <Button title={"Incluir"} />
      </div>

      <button className="favorites">
        <AiOutlineHeart className="hearth" />
      </button>
    </Container>
  );
}
