// 加载 UI 和流式传输: https://nextjs.net.cn/docs/app/building-your-application/routing/loading-ui-and-streaming
// 特殊文件 `loading.js` 帮助您使用 React Suspense 创建有意义的加载 UI

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
