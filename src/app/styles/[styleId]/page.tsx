// app/styles/[styleId]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const res = await fetch(
    'https://magicshadow.xuanyeai.com/mdp/api/v1.0/style/list',
  );
  const { data } = await res.json();

  return data.list.map((style: { styleId: number }) => ({
    styleId: style.styleId.toString(),
  }));
}

export default async function StylePage({
  params,
}: {
  params: { styleId: string };
}) {
  const res = await fetch(
    `https://magicshadow.xuanyeai.com/mdp/api/v1.0/style/list`,
  );
  const { data } = await res.json();
  const style = data.list.find(
    (s: { styleId: number }) => s.styleId.toString() === params.styleId,
  );

  if (!style) {
    return notFound();
  }

  return (
    <div>
      <h1>{style.styleName}</h1>
      <Image src={style.styleCover} alt={style.styleName} />
    </div>
  );
}
