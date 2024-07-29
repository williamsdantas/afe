// Episodio.tsx
import React, { useEffect, useState } from "react";
import { EpisodioResponse, EpisodioType } from "../../types";
import { getTodosEpisodios } from "../../services/api/episodioAPI/episodioAPI";
import "./episodio.css";
import Loading from "../../components/loading/loading";
import { Pagination, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Episodio: React.FC = () => {
  const [episodios, setEpisodios] = useState<EpisodioType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);

    getTodosEpisodios(pagina)
      .then((data: EpisodioResponse) => {
        setEpisodios(data.results);
        setTotalPaginas(data.info.pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Falha ao recuperar os episódios:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pagina]);

  const handlePageChange = (pagina: number) => {
    setPagina(pagina);
  };

  const renderPagination = () => {
    const items: React.ReactNode[] = [];

    if (totalPaginas <= 1) return null;

    items.push(
      <Pagination.First
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={pagina === 1}
      />
    );

    if (pagina > 3) items.push(<Pagination.Ellipsis key="ellipsis-start" />);

    for (
      let i = Math.max(1, pagina - 2);
      i <= Math.min(totalPaginas, pagina + 2);
      i++
    ) {
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

    if (pagina < totalPaginas - 2)
      items.push(<Pagination.Ellipsis key="ellipsis-end" />);

    items.push(
      <Pagination.Last
        key="last"
        onClick={() => handlePageChange(totalPaginas)}
        disabled={pagina === totalPaginas}
      />
    );

    return items;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="episodios-container1">
      <header>
        <h1>Episódios</h1>
      </header>
      <div className="episodios-grid-container1">
        {episodios.map((episodio) => (
          <Card
            key={episodio.id}
            className="episodio-card1"
            onClick={() => navigate(`/episodio/${episodio.id}`)}
          >
            <Card.Body>
              <Card.Title>{episodio.name}</Card.Title>
              <Card.Text>
                <strong>Air Date:</strong> {episodio.air_date}
              </Card.Text>
              <Card.Text>
                <strong>Episode:</strong> {episodio.episode}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
     
        <div className="pagination-controls mt-4">
          <Pagination>{renderPagination()}</Pagination>
        </div>
     
    </div>
  );
};

export default Episodio;
