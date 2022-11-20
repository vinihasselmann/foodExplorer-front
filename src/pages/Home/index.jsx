import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import imgHome from "../../assets/imgPrincipal.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";
import { api } from "../../service/api";

import Carousel from 'react-elastic-carousel';

export function Home() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 910, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  let typeDishes;
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(
        `/dishes?title=${search}&ingredient=${search}`
      );
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  if (dishes.length > 0) {
    typeDishes = dishes.map((e) => e);
  }

  console.log(typeDishes);

  return (
    <Container>
      <Header setSearch={setSearch} />

      <Content>
        <div>
          <img src={imgHome} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
       
        <Section title="Pratos principais">
          {dishes.length > 0 && (
            <>
            <Carousel breakPoints={breakPoints} pagination={false}>
            {dishes.filter(dishes=> dishes.category == "Pratos principais").map((item, index) => (
                <FoodCard key={index} data={item} />
              ))}
            </Carousel>
            </>
          )}
        </Section>


        <Section title="Bebidas">
          {dishes.length > 0 && (
            <>
            <Carousel breakPoints={breakPoints} pagination={false}>
            {dishes.filter(dishes=> dishes.category == "Bebidas").map((item, index) => (
                <FoodCard key={index} data={item} />
              ))}
            </Carousel>
            </>
          )}
        </Section>

        <Section title="Sobremesas">
          {dishes.length > 0 && (
            <>
            <Carousel breakPoints={breakPoints} pagination={false}>
            {dishes.filter(dishes=> dishes.category == "Sobremesas").map((item, index) => (
                <FoodCard key={index} data={item} />
              ))}
            </Carousel>
            </>
          )}
        </Section>

      </Content>

      <Footer />
    </Container>
  );
}
