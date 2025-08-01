
// maintain here the tech thingies

export type TechSkillId = 
    'html' | 'css' | 'javascript' | 'typescript' | 'bootstrap' | 'tailwind' | 'react' | 'angular' | 
    'php' | 'python' | 'dart' | 'java' | 'cplusplus' | 'nodejs' | 'flask' | 'nextjs' | 'flutter' | 
    'mysql' | 'firebase' | 'objectbox' | 'supabase' |  'postgres' |
    'git' | 'github' | 'figma' | 'canva' ;

export interface TechSkill {
  id: TechSkillId;
  name: string;
  image: string;
}

export type TechTabType = 'pl' | 'fw' | 'db' | 'tools';
    
export interface TechTabInterface {
  title: string;
  value: TechTabType;
}


export const ProgrammingSkillsCollection: TechSkill[] = [
  { id: 'html',       name: 'HTML',        image: '/icons/tech-skill/html.png'                  },
  { id: 'css',        name: 'CSS',         image: '/icons/tech-skill/css.png'                   },
  { id: 'javascript', name: 'Javascript',  image: '/icons/tech-skill/javascript.png'            },
  { id: 'typescript', name: 'TypeScript',  image: '/icons/tech-skill/typescript.png'            },
  { id: 'php',        name: 'PHP',         image: '/icons/tech-skill/php.png'                   },
  { id: 'python',     name: 'Python',      image: '/icons/tech-skill/python.png'                },
  { id: 'dart',       name: 'Dart',        image: '/icons/tech-skill/dart.png'                  },
  { id: 'java',       name: 'Java',        image: '/icons/tech-skill/java.svg'                  },
  { id: 'cplusplus',  name: 'C++',         image: '/icons/tech-skill/cplusplus.png'             },
];
export const FrameworksSkillsCollection: TechSkill[] = [
  { id: 'bootstrap',  name: 'Bootstrap',   image: '/icons/tech-skill/bootstrap.svg'             },
  { id: 'tailwind',   name: 'Tailwind',    image: '/icons/tech-skill/tailwind.svg'              },
  { id: 'react',      name: 'React',       image: '/icons/tech-skill/react.png'                 },
  { id: 'angular',    name: 'Angular',     image: '/icons/tech-skill/angular.png'               },
  { id: 'flutter',    name: 'Flutter',     image: '/icons/tech-skill/flutter.png'               },
  { id: 'nodejs',     name: 'Node.js',     image: '/icons/tech-skill/nodejs.svg'                },
  { id: 'flask',      name: 'Flask',       image: '/icons/tech-skill/flask.svg'                 },
  { id: 'nextjs',     name: 'NextJS',      image: '/icons/tech-skill/nextjs.png'                },
];
export const DatabasesSkillsCollection: TechSkill[] = [
  { id: 'mysql',      name: 'MySQL',       image: '/icons/tech-skill/mysql.png'                 },
  { id: 'firebase',   name: 'Firebase',    image: '/icons/tech-skill/firebase.png'              },
  { id: 'objectbox',  name: 'ObjectBox',   image: '/icons/tech-skill/objectbox.png'             },
  { id: 'supabase',   name: 'Supabase',    image: '/icons/tech-skill/supabase.png'              },
  { id: 'postgres',   name: 'PostgreSQL',  image: '/icons/tech-skill/postgres.png'              },
];
export const ToolsSkillsCollection: TechSkill[] = [
  { id: 'git',        name: 'Git',         image: '/icons/tech-skill/git.svg'                   },
  { id: 'github',     name: 'GitHub',      image: '/icons/tech-skill/github-mark-white.png'     },
  { id: 'figma',      name: 'Figma',       image: '/icons/tech-skill/figma.png'                 },
  { id: 'canva',      name: 'Canva',       image: '/icons/tech-skill/canva.svg'                 },
];

export const TechSkillsCollection: TechSkill[] = [
  ...ProgrammingSkillsCollection,
  ...FrameworksSkillsCollection,
  ...DatabasesSkillsCollection,
  ...ToolsSkillsCollection,
];

export const TechTabs: TechTabInterface[] = [
  {
    title: 'Languages',
    value: 'pl',
  },
  {
    title: 'Frameworks',
    value: 'fw',
  },
  {
    title: 'Databases',
    value: 'db',
  },
  {
    title: 'Tools',
    value: 'tools',
  },
]