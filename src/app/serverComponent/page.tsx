import Image from 'next/image';

const StyleList = async () => {
  const getStyleList = async () => {
    // 假设你有一个从外部 API 获取数据的函数
    const res = await fetch(
      'https://magicshadow.xuanyeai.com/mdp/api/v1.0/style/list',
    );
    const styleListRes = await res.json();

    return styleListRes.data;
  };

  const styleList = await getStyleList();

  return (
    <div>
      <h2 className="text-lg mb-2">选择风格</h2>
      <ul className="grid  grid-cols-5 gap-1">
        {styleList.list.map((style: any) => (
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
};

export default StyleList;
