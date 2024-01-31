// import React from 'react'
import ReactDOM from 'react-dom/client';
import { Toaster } from '@/components/ui/sonner';
// import { store } from './redux/store';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import './index.css';
import { SWRConfig } from 'swr';
import { toast } from 'sonner';
import { LocalStorage } from './lib/utils.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <SWRConfig
        value={{
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              console.log(error);
              let errorTxt = error;
              if (error === 'jwt expired') {
                LocalStorage.clear();
                window.location.reload();
              }

              // We can send the error to Sentry,
              // or show a notification UI.
              toast.error(errorTxt);
            }
          },
        }}
      >
        <App />
        <Toaster
          toastOptions={{
            unstyled: true,
            style: {
              position: 'fixed',
              right: '2em',
              bottom: '2em',
            },
            actionButtonStyle: {
              color: 'hsl(var(--accent-foreground))',
              backgroundColor: 'hsl(var(--accent))',
            },
            cancelButtonStyle: {
              color: 'hsl(var(--destructive-foreground))',
              backgroundColor: 'hsl(var(--destructive))',
            },
            classNames: {
              toast:
                'max-w-sm flex items-center gap-2 rounded p-2 px-3 bg-background text-foreground shadow-lg border border-border',
              title: 'text-red-400',
              actionButton: 'border border-red-500',
              error: 'border-red-300 bg-red-200 text-red-900',
              success: 'border-green-300 bg-green-100 text-green-900',
              warning: 'border-orange-300 bg-orange-100 text-orange-900',
              info: 'border-blue-300 bg-blue-200 text-blue-900',
            },
          }}
        />
      </SWRConfig>
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
);
