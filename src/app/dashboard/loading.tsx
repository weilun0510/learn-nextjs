// 加载 UI 和流式传输: https://nextjs.net.cn/docs/app/building-your-application/routing/loading-ui-and-streaming
// 特殊文件 `loading.js` 帮助您使用 React Suspense 创建有意义的加载 UI

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <span className="bg-accent loading loading-spin  w-12  opacity-90"></span>
  );
}
