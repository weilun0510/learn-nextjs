import { SelectableStyleList } from './SelectableStyleList';

export default async function StylePage() {
  const res = await fetch(
    `https://magicshadow.xuanyeai.com/mdp/api/v1.0/style/list`,
  );
  const { data } = await res.json();
  console.log('ssr data: ', data);

  return (
    <div>
      <h1>serverAndClient</h1>
      <p className="text-red-500">Server Components 不允许使用 useState，</p>
      <p>
        不破坏服务器端组件的前提下，如果想加入状态，可以将涉及状态管理的逻辑放到Client
        Component 中，确保在服务器渲染和客户端状态管理之间有明确的分工
      </p>
      <SelectableStyleList styles={data.list} />

      <section>
        <h4>
          SelectableStyleList 和 SelectableStyle 是客户端组件，为什么在 Google
          Network 中的预览中存在 style.styleName ?
        </h4>
        <div className="bg-amber-200">
          <div>
            静态 HTML 输出：Next.js 在服务器端渲染 (SSR) 时，会生成初始的静态
            HTML 输出。这意味着在客户端组件渲染之前，服务器已经生成了 HTML 包含
            style.styleName 的文本内容，以确保 SEO 和初始页面加载速度。
          </div>
          <div>
            混合渲染：在 Next.js
            中，即使是客户端组件，其初始内容仍然可以通过服务器渲染生成的 HTML
            输出传递到客户端。这会让预览工具能够看到这些内容，尽管最终的交互行为（如
            useState 的状态管理）将在客户端完成。
          </div>
          <div>
            数据注水 (Hydration)：Next.js
            使用“数据注水”机制，即在服务器端渲染静态 HTML 后，将 React
            组件绑定到这些 HTML
            节点上，使之成为动态可交互的客户端组件。因此，初始内容会在静态 HTML
            中可见，并在客户端渲染时变得动态化。
          </div>
        </div>
      </section>

      <section>
        <h4>为什么初始html不包含图片？</h4>
        <div className="bg-amber-200">
          <div>
            服务端渲染 (SSR)： Next.js 在服务端生成初始 HTML
            时，服务端只会渲染静态内容。对于使用了客户端钩子（如
            useState）的部分，这些内容会在初始 HTML
            中留出占位符，然后等到页面在客户端“注水”后，再由 React
            将其变成动态内容。
            如果图片是通过客户端组件处理并渲染的，那么这些图片不会在服务端 HTML
            输出中出现，而是等待客户端 JavaScript 执行后才会显示。
          </div>
          <div>
            “注水”过程： “注水”是指当页面加载时，客户端 React
            代码接管服务端生成的静态
            HTML，并将其转换为可交互的页面。在此过程中，动态内容（例如从
            useState 获取的数据）才会被填充。因此，在初始 HTML
            中可能看不到这些数据。
          </div>
          <div>
            图片数据的渲染时机：
            尽管构建时已经获取到图片数据，但如果这些数据依赖于客户端状态或效果来显示，图片并不会出现在服务端返回的初始
            HTML
            中。这就是为什么在浏览器中查看初始页面文档时，可能看不到图片的原因。
          </div>
        </div>
      </section>
    </div>
  );
}
