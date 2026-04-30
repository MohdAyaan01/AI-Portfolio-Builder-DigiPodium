'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Professional from './Professional';
import Bold from './Bold';
import Minimalist from './Minimalist';

const templates = {
    professional: Professional,
    bold: Bold,
    minimalist: Minimalist,
};

export default function PortfolioClient({ params }) {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { TemplateId } = params;
    const TemplateComponent = templates[TemplateId?.toLowerCase()] || Professional;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const portfolioId = localStorage.getItem('currentPortfolioId');
                if (!portfolioId) {
                    setError('No portfolio data found');
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/${portfolioId}`);
                setData(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
                setError('Failed to load portfolio data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
    if (error) return <div className="min-h-screen bg-black flex items-center justify-center text-red-500">{error}</div>;

    return <TemplateComponent data={data} />;
}
