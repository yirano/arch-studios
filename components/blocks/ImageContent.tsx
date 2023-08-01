import React from 'react';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import ComponentWrapper from "@/components/common/ComponentWrapper";

export default function ImageContent() {
  return (
    <ComponentWrapper customClass="h-[560px]">
      <div className='h-full bg-black px-[167px] flex justify-center flex-col'>
        <Heading size="lg" type="h2" color="secondary" customClass="">
          Image Content
        </Heading>
        <Button customClass="mt-[41px]">About Us</Button>
      </div>
    </ComponentWrapper>
  );
}
