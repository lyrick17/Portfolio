
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
  { id: 'html',       name: 'HTML',        image: '/icons/tech-skill/html.svg'                  },
  { id: 'css',        name: 'CSS',         image: '/icons/tech-skill/css.svg'                   },
  { id: 'javascript', name: 'Javascript™',  image: '/icons/tech-skill/javascript.svg'            },
  { id: 'typescript', name: 'TypeScript',  image: '/icons/tech-skill/typescript.svg'            },
  { id: 'php',        name: 'PHP®',         image: '/icons/tech-skill/php.svg'                   },
  { id: 'python',     name: 'Python®',      image: '/icons/tech-skill/python.svg'                },
  { id: 'dart',       name: 'Dart™',        image: '/icons/tech-skill/dart.svg'                  },
  { id: 'java',       name: 'Java®',        image: '/icons/tech-skill/java.svg'                  },
  { id: 'cplusplus',  name: 'C++',         image: '/icons/tech-skill/cplusplus.svg'             },
];
export const FrameworksSkillsCollection: TechSkill[] = [
  { id: 'bootstrap',  name: 'Bootstrap',   image: '/icons/tech-skill/bootstrap.svg'             },
  { id: 'tailwind',   name: 'Tailwind',    image: '/icons/tech-skill/tailwind.svg'              },
  { id: 'react',      name: 'React™',       image: '/icons/tech-skill/react.svg'                 },
  { id: 'angular',    name: 'Angular®',     image: '/icons/tech-skill/angular.svg'               },
  { id: 'flutter',    name: 'Flutter™',     image: '/icons/tech-skill/flutter.svg'               },
  { id: 'nodejs',     name: 'Node.js™',     image: '/icons/tech-skill/nodejs.svg'                },
  { id: 'flask',      name: 'Flask',       image: '/icons/tech-skill/flask.svg'                 },
  { id: 'nextjs',     name: 'NextJS',      image: '/icons/tech-skill/nextjs.svg'                },
];
export const DatabasesSkillsCollection: TechSkill[] = [
  { id: 'mysql',      name: 'MySQL®',       image: '/icons/tech-skill-default/database.svg'      },
  { id: 'firebase',   name: 'Firebase',    image: '/icons/tech-skill/firebase.svg'              },
  { id: 'objectbox',  name: 'ObjectBox',   image: '/icons/tech-skill/objectbox.png'             },
  { id: 'supabase',   name: 'Supabase',    image: '/icons/tech-skill/supabase.svg'              },
  { id: 'postgres',   name: 'PostgreSQL',  image: '/icons/tech-skill/postgres.svg'              },
];
export const ToolsSkillsCollection: TechSkill[] = [
  { id: 'git',        name: 'Git™',         image: '/icons/tech-skill/git.svg'                   },
  { id: 'github',     name: 'GitHub',      image: '/icons/tech-skill/github-mark-white.svg'     },
  { id: 'figma',      name: 'Figma',       image: '/icons/tech-skill/figma.svg'                 },
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