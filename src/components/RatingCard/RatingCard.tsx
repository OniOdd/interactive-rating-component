import { useState } from 'react';
import style from './RatingCard.module.css';

function RatingCard() {
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const ratingCard = (
    <>
      <div className={style.card__iconContainer}>
        <span className={style.card__icon}></span>
      </div>
      <h1 className={style.card__title}>How did we do?</h1>
      <p className={style.card__text}>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <div className={style.card__ratingContainer}>
        {
          [...Array(5)].map((_, index) => {
            index += 1;
            return (
              <button className={`${style.card__rating} ${index === rating ? style.active : ''}`}
                      type="button" key={index} onClick={() => handleClickRating(index)}
                      aria-label={`You can click on this button with the number of ${index}.`}
              >{index}</button>
            );
          })
        }
      </div>
      <button className={style.card__button} type="button"
              aria-label='Click on this button to submit the form'
              onClick={handleClickSubmit}
      >Submit</button>
    </>
  );

  const resultCard = (
    <>
      <span className={style.card__illustration}></span>
      <div className={style.card__textSelected}>
        <p>You selected {rating} out of 5</p>
      </div>
      <h2 className={`${style.card__title} ${style.card__title_marginLeft}`}>Thank you!</h2>
      <p className={style.card__text}>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!
      </p>
    </>
  );

  function handleClickRating(index: number) {
    setRating(index);
  }

  function handleClickSubmit() {
    if (rating === 0) alert('Please, select a number');
    else setSubmit(true);
  }

  return (
    <article className={`${style.card} ${submit ? style.card_alignCenter : ''}`}>
      {submit ? resultCard : ratingCard}
    </article>
  );
}

export default RatingCard;
