'use client';

import { useState } from 'react';
import { FilterButton } from './filter-button';

export function FilterArray() {
  const category = ['general', 'all', 'internet', 'water'];
  const time = ['recent', 'this month', 'this year'];

  const [catVar, setCategory] = useState(category[0]);

  const [timeVar, setTime] = useState(time[0]);
  return (
    <div className="my-3 flex flex-row justify-between lg:ml-3 w-[250px] mx-auto lg:mr-auto px-3 py-3 gap-4">
      <FilterButton
        title="Category"
        items={category}
        stateVar={catVar}
        stateCallback={setCategory}
      />
      <FilterButton
        title="Time"
        items={time}
        stateVar={timeVar}
        stateCallback={setTime}
      />
    </div>
  );
}
