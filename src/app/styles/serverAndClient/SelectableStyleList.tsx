'use client';

import React, { useState } from 'react';
import SelectableStyle from './SelectableStyle';

export const SelectableStyleList = ({ styles }: any) => {
  const [selectedStyleId, setSelectedStyleId] = useState<number | null>(null);

  return (
    <ul className="grid grid-cols-5 gap-1">
      {styles.map((style: any) => (
        <SelectableStyle
          key={style.styleId}
          style={style}
          selectedStyleId={selectedStyleId}
          onSelect={setSelectedStyleId}
        />
      ))}
    </ul>
  );
};
