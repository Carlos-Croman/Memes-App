import { useForm } from '../hooks/useForm';
import { Meme } from './Meme';

export const Form = ({ image }) => {

  const { textBottom, textTop, onInputChange, onResetForm } = useForm({ textBottom: '', textTop: '' });

  return (
    <>
      <input type="text" placeholder="Type the top text" name="textTop" onChange={ onInputChange } value={ textTop } />
      <input type="text" placeholder="Type the bottom text" name="textBottom" onChange={ onInputChange } value={ textBottom } />
      <hr />
      <button onClick={ onResetForm }>Reset form</button>
      <Meme textTop={ textTop } textBottom={ textBottom } image={ image } />
    </>
  );
}