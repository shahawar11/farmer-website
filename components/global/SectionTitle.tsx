import React from 'react'
import { Separator } from '@/components/ui/separator';

function SectionTitle({text}:{text:string}) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8 ">
        {text}
      </h2>
      <div className='pb-12'>
        {" "}
        <Separator />
      </div>
    </div>
  );
}

export default SectionTitle
