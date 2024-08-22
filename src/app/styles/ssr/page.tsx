import Image from 'next/image';
export default async function StylePage() {
  const res = await fetch(
    `https://magicshadow.xuanyeai.com/mdp/api/v1.0/style/list`,
  );
  const { data } = await res.json();
  console.log('ssr data: ', data);

  return (
    <div>
      <h1>SSR</h1>
      <p>
        适用于需要在每次请求时生成页面内容的情况。通常用于需要实时数据的页面。
      </p>
      <p>每次请求都会从服务器获取最新的数据，从而渲染页面内容。</p>
      <ul className="grid  grid-cols-5 gap-1">
        {data.list.map((style: any) => (
          <div
            key={style.styleId}
            className={
              'relative border-4 border-transparent rounded-lg cursor-pointer transition-colors duration-300 '
            }
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
          </div>
        ))}
      </ul>
    </div>
  );
}
