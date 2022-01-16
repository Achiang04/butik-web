import 'tailwindcss/tailwind.css';
import './custom.css';

import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <ReduxProvider store={store}>
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
        // </ReduxProvider>
    );
}

export default MyApp;
