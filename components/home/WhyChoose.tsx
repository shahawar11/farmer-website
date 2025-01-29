import React from 'react'
import Image from 'next/image';
import SectionTitle from '../global/SectionTitle'

function WhyChoose() {
  return (
    <div className="padding">
      <SectionTitle text="why choose us?" />
      <div className="max-w-xl  border rounded rounded-tr-2xl rounded-br-2xl shadow-xl grid grid-cols-2 mx-auto  ">
        <div className="flex text-left font-semibold flex-col items-start  p-4 lg:p-6 justify-center space-y-12">
          
            <div className="flex gap-x-2">
              <Image src="/arrow.svg" alt="" width={15} height={40} />
              <div>Proven Experience</div>
            </div>
            <div className="flex gap-x-2">
              <Image src="/arrow.svg" alt="" width={15} height={40} />
              <div>Quality Assurance</div>
            </div>
            <div className="flex gap-x-2">
              <Image src="/arrow.svg" alt="" width={15} height={40} />
              <div>Sustainable Practices</div>
            </div>
            <div className="flex gap-x-2">
              <Image src="/arrow.svg" alt="" width={15} height={40} />
              <div>Customer-Centric Approach</div>
            </div>
          
        </div>
        <div>
          <Image
            src="/cropmob1.jpg"
            width={300}
            height={300}
            alt=''
            className=" rounded-tr-2xl rounded-br-2xl"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose
