import PortfolioClient from './PortfolioClient';

export async function generateStaticParams() {
    return [
        { TemplateId: 'professional' },
        { TemplateId: 'bold' },
        { TemplateId: 'minimalist' },
    ];
}

export default function Page({ params }) {
    return <PortfolioClient params={params} />;
}