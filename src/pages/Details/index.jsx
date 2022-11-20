import { Container, Content } from "./styles";
import { Tag } from "../../components/Tag";
import orderPng from "../../assets/order.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { api } from "../../service/api";

import { IoIosArrowBack } from "react-icons/io";
export function Details() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  
  const params = useParams();

  const imageURl = data && `${api.defaults.baseURL}files/${data.image}`;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <div>
          <button className="backToPage" onClick={handleBack}>
            <IoIosArrowBack />
            Voltar
          </button>
        </div>

        {data && (
          <Content>
            <img className="dish" src={imageURl} alt="" />

            <div className="information">
              <div className="description">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>

              <div className="ingredients">
                {data.ingredients.map((item, index) => (
                  <Tag title={item.name} key={index} />
                ))}
              </div>

              <div className="price">
                <strong>R$ {data.price}</strong>
                <div className="count">
                  <button
                    onClick={() => setCount((count) => count - 1)}
                    className="stepper-btn"
                  >
                    -
                  </button>
                  <span className="counter">{count}</span>
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="stepper-btn"
                  >
                    +
                  </button>
                </div>
                <Button icon={orderPng} title="incluir" />
              </div>
            </div>
          </Content>
        )}
      </main>

      <Footer />
    </Container>
  );
}
