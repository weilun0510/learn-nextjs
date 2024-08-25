'use client';

import { useProjectStore } from '@/app/stores/project-store-provider';

const Edit = () => {
  const { currentStep } = useProjectStore((state) => state);

  return (
    <div>
      <div>project root page</div>
      <div>{currentStep}</div>
    </div>
  );
};

// Edit.getLayout = function getLayout(page: ReactElement) {
//   return <ProjectLayout>{page}</ProjectLayout>;
// };

export default Edit;
