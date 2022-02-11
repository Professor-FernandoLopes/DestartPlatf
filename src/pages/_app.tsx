import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
import twindConfig from '../twind.config';


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
