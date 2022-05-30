import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {QueryClientProvider, QueryClient} from 'react-query'


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient(QueryClientProvider);
root.render(
    <QueryClientProvider client={queryClient}>
         <App />
    </QueryClientProvider>

);

