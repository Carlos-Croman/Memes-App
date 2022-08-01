import DomToImage from 'dom-to-image';

export const onExportImage = ( image ) => {

  DomToImage.toJpeg(document.querySelector('#meme'), { quality: 0.99 })
  .then( (dataUrl) => {
      const link = document.createElement('a');
      link.download = `${image}-meme.jpeg`;
      link.href = dataUrl;
      link.click();
  });
  
}