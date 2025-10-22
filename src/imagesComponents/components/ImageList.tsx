import type { robotsProps } from "../../interfaces/images.interfaces"


interface Props {
    robots:robotsProps[]
}


export const ImageList = ({ robots }:Props) => {

  console.log("En mi image list", robots);

  // Verificación para evitar errores
  if (!robots || robots.length === 0) {
    return <div>No hay robots disponibles</div>;
  }

  return (
     <div className="gifs-container">
        {
            robots.map( ( robot ) => {
                return (
                    <div key={ robot.id } className="gif-card">
                        <img src={ robot.avatar } alt={ robot.name } />
                        <h3>{ robot.name }</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
