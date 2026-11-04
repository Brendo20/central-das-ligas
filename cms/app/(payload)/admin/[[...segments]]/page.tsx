import config from '@payload-config';
import { RootPage, generatePageMetadata } from '@payloadcms/next/views';

type Props = Parameters<typeof RootPage>[0];
export const generateMetadata = ({ params, searchParams }: Props) =>
  generatePageMetadata({ config, params, searchParams });

export default function Page({ params, searchParams }: Props) {
  return RootPage({ config, importMap: {}, params, searchParams });
}
