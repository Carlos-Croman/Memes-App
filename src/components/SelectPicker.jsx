import { useState } from 'react';
import { Form } from './Form';

export const SelectPicker = () => {

  const [image, setImage] = useState('');

  return (
    <>
      <select onChange={ ({ target }) => setImage(target.value) } name="images" id="selecter" defaultValue="" >
        <option value="" disabled>Select an image</option>
        <option value="fire">House on Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">Crazy Man</option>
        <option value="smart">Smart Guy</option>
        <option value="matrix">Matrix</option>
      </select>
      <br />
      <Form image={ image }/>
      <br />
    </>
  );
}