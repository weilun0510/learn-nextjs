'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface StyleProps {
  style: any;
  selectedStyleId: number | null;
  onSelect: (id: number) => void;
}

const SelectableStyle: React.FC<StyleProps> = ({
  style,
  selectedStyleId,
  onSelect,
}) => {
  const isSelected = selectedStyleId === style.styleId;

  return (
    <div
      key={style.styleId}
      className={twMerge(
        'relative border-4 border-transparent rounded-lg cursor-pointer transition-colors duration-300',
        isSelected ? 'selected border-primary' : '',
      )}
      onClick={() => onSelect(style.styleId)}
    >
      <Image
        className="rounded-lg aspect-square object-cover"
        src={style.styleCover}
        alt={style.styleName}
        width={169 * 3}
        height={169 * 3}
      />
      <p className="w-full absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-white sm:text-xs lg:text-sm">
        {style.styleName}
      </p>
      <input
        type="checkbox"
        checked={isSelected}
        className="checkbox checkbox-primary absolute top-2 right-2"
        onChange={() => {}}
      />
    </div>
  );
};

export default SelectableStyle;
