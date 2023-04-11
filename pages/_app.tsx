import '@/styles/globals.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import theme from '@/utils/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
