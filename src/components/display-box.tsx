import { useState } from 'react';

interface Props {
    text: string,
};

const DisplayBox = ({text}: Props) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-5">
      <div className="rounded-lg border bg-gray-50 p-6 shadow-sm">
        <div className="h-[300px] overflow-y-auto pr-4">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;