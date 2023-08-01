import React from 'react';
import Heading from '../common/Heading';

const Featured = () => {
  return (
    <div className='py-[100px] inline-block'>
      <Heading size='lg' type='h2' color='primary'>
        Featured
      </Heading>
      <div>
        Cards will go here
      </div>
    </div>
  );
};

export default Featured;