'use client';

import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const ImagePreview = ({ url }: { url: string }) => {
  const [angle, setAngle] = useState(0);

  return (
    <div className="w-full h-5/6 mx-4  px-2 py-3 flex gap-4 justify-center flex-col border">
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
        flex items-center justify-center"
      >
        <Image
          src={url}
          alt="image-preview"
          objectFit="fill"
          width="150"
          height="150"
          style={{ transform: `rotate(${angle}deg)` }}
          className=" transition-transform ease-in-out"
        />
      </div>
    </div>
  );
};
