import allReducers from '@/src/Store/Reducers/rootReducer';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

const store = createStore(allReducers);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <main className={roboto.className}>
                    <Component {...pageProps} />
                </main>
            </Provider>
        </>
    );
}
