import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((images) => {
          return <GifItem key={images.id} {...images} />;
        })}
      </div>
    </>
  );
}

export default GifGrid;
