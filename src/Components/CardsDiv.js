import React from 'react';
import Card from './Card';
import calc from '../images/icon-calculator.svg';
import karma from '../images/icon-karma.svg';
import Supervisor from '../images/icon-supervisor.svg';
import team from '../images/icon-team-builder.svg';

const CardsDiv = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row gap-10 max-w-[1100px] m-auto">
      <div className="flex flex-1 justify-center items-center">
        <Card
          borderColor={'border-[#45d3d3]'}
          img={Supervisor}
          title={'Supervisor'}
          desc={'Monitors activity to identify project roadblocks'}
        />
      </div>
      <div className="flex flex-col flex-1 gap-10 justify-between items-center">
        <Card
          borderColor={'border-[#ea5353]'}
          img={team}
          title={'Team Builder'}
          desc={
            'Scans our talent network to create the optimal team for your project'
          }
        />
        <Card
          borderColor={'border-[#fcaf4a]'}
          img={karma}
          title={'Karma'}
          desc={'Regularly evaluates our talent to ensure quality'}
        />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Card
          borderColor={'border-[#549ef2]'}
          img={calc}
          title={'Calculator'}
          desc={
            'Uses data from past projects to provide better delivery estimates'
          }
        />
      </div>
    </section>
  );
};

export default CardsDiv;
