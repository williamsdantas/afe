import React, { useEffect, useState } from "react";
import { Col, Row, Carousel, Pagination } from "react-bootstrap";
import { PersonagemType, PersonagemResponse } from "../../types";
import { getTodosPersonagens } from "../../services/api/personagemAPI/personagemAPI";
import './personagem.css';
import CardPersonagem from "../../components/cardPersonagem/cardPersonagem";
import Loading from "../../components/loading/loading";

const Personagem: React.FC = () => {
  const [personagens, setPersonagens] = useState<PersonagemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);

  useEffect(() => {
    setLoading(true);

    getTodosPersonagens(pagina)
      .then((data: PersonagemResponse) => {
        setPersonagens(data.results);
        setTotalPaginas(data.info.pages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Falha ao recuperar os personagens:', error);
        setLoading(false);
      });

  }, [pagina]);

  const handlePageChange = (pagina: number) => {
    setPagina(pagina);
  };

  const dividirEmSlides = (personagens: PersonagemType[]) => {
    const slides = [];
    const cardsPorSlide = 5;
    for (let i = 0; i < personagens.length; i += cardsPorSlide) {
      slides.push(personagens.slice(i, i + cardsPorSlide));
    }
    return slides;
  };

  const renderPagination = () => {
    const items: React.ReactNode[] = [];

    if (totalPaginas <= 1) return null;

    // Página 1 e Elipses
    items.push(
      <Pagination.First key="first" onClick={() => handlePageChange(1)} disabled={pagina === 1} />
    );

    if (pagina > 3) items.push(<Pagination.Ellipsis key="ellipsis-start" />);

    // Páginas intermediárias
    for (let i = Math.max(1, pagina - 2); i <= Math.min(totalPaginas, pagina + 2); i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === pagina}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (pagina < totalPaginas - 2) items.push(<Pagination.Ellipsis key="ellipsis-end" />);

    // Última Página
    items.push(
      <Pagination.Last key="last" onClick={() => handlePageChange(totalPaginas)} disabled={pagina === totalPaginas} />
    );

    return items;
  };

  if (loading) {
    return <Loading />;
  }

  const slides = dividirEmSlides(personagens);

  return (
      <div className="central-column">
        <header><h1>Personagens</h1></header>
        <Carousel interval={5000} controls indicators className="personagem-carousel">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row >
                {slide.map(personagem => (
                  <Col key={personagem.id} xs={12} sm={6} md={4} lg={2} className="mb-4">
                    <CardPersonagem personagem={personagem} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="pagination-controls mt-4">
          <Pagination>{renderPagination()}</Pagination>
        </div>
      </div>
  );
};

export default Personagem;
