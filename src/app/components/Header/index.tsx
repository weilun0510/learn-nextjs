'use client';

import { useProjectStore } from '@/app/stores/project-store-provider';

const Header = () => {
  const { currentStep, incrementStep } = useProjectStore((state) => state);
  return (
    <div className="grid grid-cols-3 px-4 py-2 bg-base-200 border-b border-b-neutral">
      <div className="flex items-center gap-4">Header</div>
      {currentStep}
      <button onClick={incrementStep} className="btn">
        add step
      </button>
    </div>
  );
};

export default Header;
