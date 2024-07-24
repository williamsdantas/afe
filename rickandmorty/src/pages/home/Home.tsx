import { Row } from "react-bootstrap";
import "./home.css";

export const Home = () => {
  return (
    <>
     
        <Row className="corpo">
          <section>
            <p className="cardtop">A série foi criada em 2013 por Justin Roiland e Dan Harmon, e conta
            a história da família Smith -- mais precisamente de Rick, um
            cientista inteligentíssimo que mora com sua filha, Beth, seu genro,
            Jerry, e seus netos, Summer e Morty. A grande questão é que, apesar
            de usar o pretexto das aventuras entre o avô e seu neto mais novo,
            Rick and Morty traz argumentos notáveis para prender, entreter e
            conquistar o público -- especialmente se você não costuma gostar de
            desenhos animados.
            </p>
          
          <p className="cardBottom">
            Apesar de ter sacadas extremamente inteligentes, Rick and Morty traz
            o típico humor "sombrio". A série até traz piadas bobas relacionadas
            a flatulências e outras questões corporais, mas as mais engraçadas
            são, provavelmente, as mais pesadas. Não vamos dar spoilers, mas
            vale dizer que a série tem um humor adulto e mais refinado do que
            South Park ou Family Guy, porque Rick and Morty não banaliza
            questões importantes ou sérias simplesmente pelo humor. Por trás de
            cada risada, ficamos com um sentimento de vazio e aquela "dor da
            verdade", que é quando o desenho atinge em cheio o ponto que deixa o
            telespectador rindo para não chorar.
          </p>
          </section>        
        </Row>
     
      <div id="rodape">
        <p>Rodapé</p>
      </div>
    </>
  );
};

export default Home;
