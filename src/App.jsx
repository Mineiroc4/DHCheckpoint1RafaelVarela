import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';
import CardsListComponent from './components/Card/CardsListComponent';

function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cardsList, setCardList] = useState([])

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
  }

  return (
    <>
      <h2>Book your Favorite Pictures!</h2>

      <form>

        <InputComponent
          title="Titulo do Anime"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}

        />

        <InputComponent
          title="Img URL"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <button onClick={handleButtonClick}>Salvar</button>

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