import { useCallback, useEffect, useState } from 'react';
import { Title2, Title3 } from '../styled/Titles';
import { CardPicture } from '../styled/Pictures';
import { SimpleP } from '../styled/Paragraphs';
import ControlBar from '../styled/ControlBar';
import Content from '../styled/Content';
import StacksContainer from '../styled/StacksContainer';
import { ControlButton } from '../styled/Buttons';

const Carousel = ({ cards, intervalTime }) => {
  const FIRST_CARD_INDEX = 0;
  const LAST_CARD_INDEX = cards.length - 1;
  const [currentCard, setCurrentCard] = useState(FIRST_CARD_INDEX);

  const goToNextCard = useCallback(() => {
    if (currentCard === LAST_CARD_INDEX) {
      setCurrentCard(0);
      return
    }

    setCurrentCard((currentCard + 1));
  }, [LAST_CARD_INDEX, currentCard]);

  const goToPreviousCard = () => {
    if (currentCard === FIRST_CARD_INDEX) {
      setCurrentCard(LAST_CARD_INDEX);
      return;
    };

    setCurrentCard((currentCard - 1));
  };

  const goToLastCard = () => {
    setCurrentCard(LAST_CARD_INDEX);
  };

  const goToFirstCard = () => {
    setCurrentCard(FIRST_CARD_INDEX);
  };

  useEffect(() => {
    const carouselInterval = setInterval(goToNextCard, intervalTime);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [currentCard, goToNextCard, intervalTime]);

  return (
    <StacksContainer>
      {
        (cards && cards.length > 0) &&
          <Content key={cards[currentCard].id}>
            <Title2>{ cards[currentCard].title }</Title2>
            <CardPicture src={ cards[currentCard].imageUrl } alt={ cards[currentCard].title } />
            
            <SimpleP>{ cards[currentCard].description }</SimpleP>
            
            <Title3>Documentação:</Title3>
            <a href={ cards[currentCard].stackDocsUrl } target="_blank" rel="noopener noreferrer">
              <SimpleP>{ cards[currentCard].stackDocsUrl }</SimpleP>
            </a>
            
            <Title3>Página da Ferramenta:</Title3>
            <a href={ cards[currentCard].stackUrl } target="_blank" rel="noopener noreferrer">
              <SimpleP>{ cards[currentCard].stackUrl }</SimpleP>
            </a>
          </Content>
      }

      <ControlBar>
        <ControlButton
          type="button"
          onClick={() => goToFirstCard()}
        >
          Primeira
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToPreviousCard()}
        >
          Anterior
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToNextCard()}
        >
          Próxima
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToLastCard()}
        >
          Última
        </ControlButton>
      </ControlBar>
    </StacksContainer>
  );
}

export default Carousel;
