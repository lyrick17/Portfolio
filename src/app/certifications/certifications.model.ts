
// maintain here the tech thingies

export interface CertificateItem {
    id: string;
    name: string;
    image: string;
    month?: string; // Optional property for month
    year?: string; // Optional property for year
}

export const CertificatesCollection: CertificateItem[] = [
    {
        id: 'itspecialist-database',
        name: 'IT Specialist - Databases',
        image: 'certificates/it-specialist-database.webp',
        month: 'July',
        year: '2023'
    },
    {
        id: 'itspecialist-python',
        name: 'IT Specialist - Python',
        image: 'certificates/it-specialist-python.webp',
        month: 'June',
        year: '2024'
    },
    {
        id: 'competition-isite-cplusplus',
        name: 'First Runner Up - National IT Skills C++ Programming Competition',
        image: 'certificates/comp-cplusplus.webp',
        month: 'April',
        year: '2024'
    },
    {
        id: 'completion-angular',
        name: 'Angular - The Complete Guide (2025 Edition)',
        image: 'certificates/cert-angular.webp',
        month: 'July',
        year: '2025'
    },
    {
        id: 'completion-sap',
        name: 'SAP Basic - SAP Business One',
        image: 'certificates/cert-sap.webp',
        month: 'March',
        year: '2023'
    },
    {
        id: 'completion-networking',
        name: 'Networking Basics',
        image: 'certificates/cert-networking.webp',
        month: 'December',
        year: '2024'
    },
    {
        id: 'completion-os',
        name: 'Operating Systems Basics',
        image: '/certificates/cert-os.webp',
        month: 'May',
        year: '2024'
    },
]