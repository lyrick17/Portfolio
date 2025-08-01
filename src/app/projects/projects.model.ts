import { TechSkillId } from "../technical-skills/technical-skills.model";

// add the projects here as needed

export type ProjectImages = {

}

export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    paragraphs?: string[]; // optional paragraphs for additional description in markdown
    technologies: TechSkillId[]; // array of technology id names
    link?: string; // optional
    images?: string[]; // optional array of image URLs for the project
}

export const FeaturedProjects : Project[] = [
    {
        id: 'gradewise',
        name: 'GradeWise',
        image: 'icons/projects/gradewise.png',
        description: 'Class Management System with Automated Handwritten Text Recognition',
        paragraphs: [   
            `**GradeWise** is a class management system designed to streamline the class record 
                management of Grade 1 to Grade 10 teachers in the Philippines. It is mainly created 
                as a mobile application with a website version if the user prefers using the system on desktop. `,
            `It can store all your student records, create and manage class activities, and view the student grades table.
                It has an _AI-powered handwriting scanning feature_ that enables the teacher to capture the student's 
                paper and let GradeWise automatically check and grade the student! The scanning feature covers identification 
                quizzes, true or false and multiple-choice type of activities.`,
            `This is an Undergraduate Thesis project where I serve as a **full-stack developer**
                for the mobile application, and mainly a **backend developer** for the website.`,
            `The GradeWise team received the **_Outstanding Computer Science Research Award_**
                and **_COECSA Innovative Research Award_** for this project.`
        ],
        technologies: ['dart', 'flutter', 'react', 'nodejs', 'tailwind', 'firebase', 'objectbox', 'python'],
        link: 'https://gradewise.netlify.app/',
        images: [
            'projects/gradewise/1.png',
            'projects/gradewise/2.png',
            'projects/gradewise/3.png',
            'projects/gradewise/4.png',
            'projects/gradewise/5.png',
        ]
    },
    {
        id: 'airis',
        name: 'Airis',
        image: 'icons/projects/airis.png',
        description: 'A Smart Chatbot with multiple AI Personas using GPT-4o Model',
        paragraphs: [   
            `**Airis** is an AI Chatbot where different chatbots are available with different specialties. It is created to assist users and businesses on providing assistance in various tasks. It has multiple AI personas such as Marketing Specialist, Intern Advisor, and more.`,
            `It can also generate images using DALL-E model once a user desired. All of their chats are stored in the database for their future reference and can be accessed anytime.`,
            `This is a project made by 5 developers where I serve as a **backend developer**. It has been created within the 3-week rapid software development.`,
        ],
        technologies: ['typescript', 'tailwind', 'nextjs', 'postgres'],
    },
    {
        id: 'voce',
        name: 'Voce',
        image: 'icons/projects/voce.jpg',
        description: 'An AI-powered Audio to Text Translation Service with Text to Text Translation',
        paragraphs: [
            `**Voce** is an Audio to Text translator website with over 100 supported languages. 
                It accepts audio files or recorded audio and then translate that into the user's chosen language. 
                We created this software to allow users to immediately understand the language of the audio 
                by simply uploading it and it will be translated automatically.`,
            `It also has a built-in English dictionary for people translating any language into English.`,
            `It is powered by **Google Translator** for translation, **OpenAI Whisper** for audio convertion into text 
                and **PyDictionary** for English dictionary.`,
            `This project is a collaborative one, where I mainly contributed on the **backend** and **database**.`,
        ],
        technologies: ['html', 'css', 'javascript', 'php', 'python', 'flask', 'mysql'],
        images: [
            'projects/voce/1.png',
            'projects/voce/2.png',
            'projects/voce/3.png',
            'projects/voce/4.png',
        ]

    },
    {
        id: 'candela',
        name: 'Candela',
        image: 'icons/projects/candela.png',
        description: 'A Food Candle E-commerce Website',
        paragraphs: [
            `**Candela** is an E-commerce website dedicated on selling food candles. 
                It allows users to order food candles, checkout and manage their orders, by which Candela 
                will deliver it afterwards. Administrators can manage the products and registered users 
                seamlessly on the site.`,
            `This project is made for our Grade 10 Computer Thesis Requirement, where I am the **full-stack developer** of the group. 
                Furthermore, we achieved the **_Best Computer Thesis_** on that Academic Year. It was created last 2018-2019 and refined this 2024. 
                It is hosted for free with SSL Certificate.`
        ],
        technologies: ['html', 'css', 'bootstrap', 'javascript', 'php', 'mysql'],
        link: 'https://candela.great-site.net/',
        images: [
            'projects/candela/1.png',
            'projects/candela/2.png',
            'projects/candela/3.png',
            'projects/candela/4.png',
        ]
    },
    
];