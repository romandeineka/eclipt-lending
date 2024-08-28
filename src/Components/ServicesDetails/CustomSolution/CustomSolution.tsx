import React from 'react';
import SliderToCard from '../../SliderToCard/SliderToCard';
import { CardsDate } from '../CardsDate';
import Card from '../../Card/Card';
import ButtonSeeAll from '../../ButtonSeeAll/ButtonSeeAll';

const CustomSolution = () => {
  return (
    <div className='px-8 mb-10 lg:mb-[180px] lg:px-20'>
      <h2 className='mb-6 text-center lg:text-[48px] lg:mb-20'>Why a custom solution?</h2>
      <div className="lg:hidden">
        <SliderToCard />
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[10px]">
        {CardsDate.map(cardDate => (
          <Card title={cardDate.title} description={cardDate.description} />
            ))}
      </div>
      <ButtonSeeAll />
    </div>
  );
}

export default CustomSolution;
