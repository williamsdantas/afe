import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "react-bootstrap";
import {LocationResponse } from "../../types";
import { getTodasLocation } from "../../services/api/locationAPI/locationAPI";
import './localizacao.css';
import { Link } from "react-router-dom";
import Loading from "../../components/loading/loading";

const Localizacao: React.FC = () => {
  const [localizacoes, setLocalizacoes] = useState<LocationResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);

  useEffect(() => {
    setLoading(true);

    getTodasLocation(pagina)
      .then((data: LocationResponse) => {
        setLocalizacoes(data);
        setTotalPaginas(data.info.pages);
        setLoading(false);
      })
      .catch(error => {
        console.error('Falha ao recuperar as localizações:', error);
        setLoading(false);
      });

  }, [pagina]);

  const handlePageChange = (pagina: number) => {
    setPagina(pagina);
  };

  const renderPagination = () => {
    const items: React.ReactNode[] = [];

    if (totalPaginas <= 1) return null;

    items.push(
      <Pagination.First key="first" onClick={() => handlePageChange(1)} disabled={pagina === 1} />
    );

    if (pagina > 3) items.push(<Pagination.Ellipsis key="ellipsis-start" />);

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

    items.push(
      <Pagination.Last key="last" onClick={() => handlePageChange(totalPaginas)} disabled={pagina === totalPaginas} />
    );

    return items;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="central-column">
      <header><h1>Localizações</h1></header>
      <Row>
        {localizacoes.map(localizacao => (
          <Col key={localizacao.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link to={`/localizacao/${localizacao.id}`} className="localizacao-card-link">
              <div className="localizacao-card">
                <h3>{localizacao.name}</h3>
                <p><strong>Tipo:</strong> {localizacao.type}</p>
                <p><strong>Dimensão:</strong> {localizacao.dimension}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="pagination-controls mt-4">
        <Pagination>{renderPagination()}</Pagination>
      </div>
    </div>
  );
};

export default Localizacao;
