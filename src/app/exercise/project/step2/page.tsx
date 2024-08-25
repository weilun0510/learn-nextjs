'use client';

import { useProjectStore } from '@/app/stores/project-store-provider';

const Step2 = () => {
  const { currentStep } = useProjectStore((state) => state);

  return (
    <div>
      <div>project step2 page</div>
      <div>{currentStep}</div>
    </div>
  );
};

// Step2.getLayout = function getLayout(page: ReactElement) {
//   return <ProjectLayout>{page}</ProjectLayout>;
// };

export default Step2;
