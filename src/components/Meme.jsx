import { onExportImage } from '../helpers/onExportImage';

export const Meme = ({ textBottom, textTop, image }) => {
  return (
    <>
      <div id="meme" style={{position: "relative"}}>
        <span className="text-top">{ textTop }</span>
        <span className="text-bottom">{ textBottom }</span>
        <img src={`/images/${image}.jpg`} alt="Meme generated" />
      </div>
      <button onClick={ () => onExportImage(image) }>Export</button>
    </>
  );
}