import React from 'react';
import Heading from '@/components/common/Heading';
import Button from '../common/Button';

export default function ImageContent() {
  return (
    <div className="py-[100px] h-[560px] ">
      <div className='h-full bg-black'>
        <Heading size="lg" type="h2" color="secondary">
          Image Content
        </Heading>
        <Button customClass="mt-[41px]">About Us</Button>
      </div>
    </div>
  );
}
