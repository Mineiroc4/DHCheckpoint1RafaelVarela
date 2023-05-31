import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import CardsListComponent from './components/Card/CardsListComponent';

function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cardsList, setCardList] = useState([])
  const [isFormValid, setIsFormValid] = useState(false);
  const [erro, setErro] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const handleButtonClick = (event) => {

    event.preventDefault()

    setCardList([
      ...cardsList,
      {
        title: title,
        imgUrl: imgUrl
      }
    ]);

    setTitle("")
    setImgUrl("")
  }
  const regex = /\d/;

  const formValidation = () => {
    if (title.length >= 3 && regex.test(imgUrl)) {
        setIsFormValid(true);
        setErro(" ")
    } else {
        setErro('Por favor, verifique os dados inseridos no formulário');2
        setIsFormValid(false);
    }
    
}

  return (
    <>
      <h1>Álbum de Fotos Favoritas!</h1>

      <form>

        <InputComponent
          title="Titulo da sua foto favorita"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
          fnOnKeyUp={formValidation}
        />

        <InputComponent
          title="URL da sua foto favorita"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
          fnOnKeyUp={formValidation}
        />

        <button onClick={handleButtonClick} disabled={!isFormValid}>Salvar</button>
        {erro && <small>{erro}</small>}
      </form>

      <CardsListComponent>

        {cardsList.map(cards => {

          return (
              <CardComponent
                key={"cards.title"}
                title={cards.title}
                imgUrl={cards.imgUrl}
              />
          );

        })}
      </CardsListComponent>
    </>
  )
}
export default App