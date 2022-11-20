import { Container } from "./styles";
import AlfaceImage from "../../assets/alface.svg";
import TomateImage from "../../assets/tomate.svg";
import RabaneteImage from "../../assets/rabanete.svg";
import PaonaanImage from "../../assets/paonaan.svg";
import PaoImage from "../../assets/pao.svg";
import RuculaImage from "../../assets/rucula.svg";
import PresuntoImage from "../../assets/presunto.svg";
import CamaraoImage from "../../assets/camarrao.svg";
import MassaImage from "../../assets/massa.svg";
import PestoImage from "../../assets/pesto.svg";
import PepinoImage from "../../assets/pepino.svg";
import MaracujaImage from "../../assets/maracuja.svg";
import CafeImage from "../../assets/cafe.svg";
import CanelaImage from "../../assets/canela.svg";
import AnizImage from "../../assets/aniz.svg";
import LimaoImage from "../../assets/limao.svg";
import WhiskeyImage from "../../assets/whiskey.svg";
import MacaImage from "../../assets/maca.svg";



export function Ingredients({ IngredientsName }) {

  return (
    <Container>
        <span>{IngredientsName == "alface" ? <img src={AlfaceImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "tomate" ? <img src={TomateImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "rabanete" ? <img src={RabaneteImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "pão naan" ? <img src={PaonaanImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "pão" ? <img src={PaoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "presunto" ? <img src={RuculaImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "rúcula" ? <img src={PresuntoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "camarão" ? <img src={CamaraoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "massa" ? <img src={MassaImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "pesto" ? <img src={PestoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "pepino" ? <img src={PepinoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "maracujá" ? <img src={MaracujaImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "café" ? <img src={CafeImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "canela" ? <img src={CanelaImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "aniz" ? <img src={AnizImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "limão" ? <img src={LimaoImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "whiskey" ? <img src={WhiskeyImage} alt=""/> : ""}</span>
        <span>{IngredientsName == "maçã" ? <img src={MacaImage} alt=""/> : ""}</span>

    </Container>
    );
}
