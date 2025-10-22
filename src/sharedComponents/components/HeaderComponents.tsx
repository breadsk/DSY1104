
interface Props {
    title:string;
    text:string;
}


export const HeaderComponents = ( { title , text }:Props ) => {
  return (
    <div className="content-center">
        <h1>{ title }</h1>
        <p>{ text }</p>
    </div>
  )
}
