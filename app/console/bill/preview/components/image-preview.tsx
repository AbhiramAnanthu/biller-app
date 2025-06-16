'use client';

import { Button } from '@/components/ui/button';
import { Rotate3D, RotateCw } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const ImagePreview = ({ url }: { url: string }) => {
  const [angle, setAngle] = useState(0);

  const angleChange = () => {
    console.log(angle);
    if (angle < 180) {
      setAngle(angle + 90);
    } else setAngle(0);
  };

  return (
    <div className="w-full h-full px-2 py-3 flex gap-4 justify-center flex-col">
      <div>
        <Button
          className=""
          onClick={() => setAngle(angle + 90)}
          variant="outline"
        >
          <RotateCw />
        </Button>
      </div>
      <div
        className="w-full h-3/4  
       border flex items-center justify-center"
      >
        <Image
          src={url}
          alt="image-preview"
          objectFit="contain"
          width="150"
          height="150"
          style={{ transform: `rotate(${angle}deg)` }}
          className=" transition-transform ease-in-out"
        />
      </div>
    </div>
  );
};
