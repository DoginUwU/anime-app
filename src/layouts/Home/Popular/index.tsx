import React from 'react';
import AnimeCardsSection from '../../../components/AnimeCardsSection';
import { useFetchPopular } from '../../../libs/query/get/popular';

const Popular: React.FC = () => {
    const { data, isLoading } = useFetchPopular();
    const animes = data?.pages.flatMap((page) => page.items) || [];

    return <AnimeCardsSection title="Popular" animes={animes} isLoading={isLoading} />;
};

export default Popular;
