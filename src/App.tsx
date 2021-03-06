import { QueryClientProvider, QueryClient } from 'react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/Home/HomeLayout';
import AnimeDetails from './pages/AnimeDetails';
import Home from './pages/Home';
import Latest from './pages/Latest';
import Player from './pages/Player';
import Search from './pages/Search';

import './styles/global.css';

const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/main_window" element={<Home />} />
                    <Route path="/search/:query" element={<Search />} />
                    <Route path="/anime" element={<AnimeDetails />} />
                    <Route path="/latest" element={<Latest />} />
                    <Route path="*" element={<Home />} />
                </Route>
                <Route path="/player" element={<Player />} />
            </Routes>
        </HashRouter>
    </QueryClientProvider>
);
