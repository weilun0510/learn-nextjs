import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// 添加辅助字体
// https://nextjs.net.cn/learn/dashboard-app/optimizing-fonts-images#practice-adding-a-secondary-font
export const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });
