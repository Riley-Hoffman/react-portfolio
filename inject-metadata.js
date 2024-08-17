const fs = require('fs-extra');

const metadata = {
  'projects': {
    title: 'Projects - Riley Hoffman - Web Developer',
    description: 'View past projects by Riley Hoffman - Web Developer.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/projects'
  },
  'projects/particle-cleanup': {
    title: 'Particle Cleanup Game - Riley Hoffman - Web Developer',
    description: 'How quickly can you clear all the particles from the board using your cursor or finger?',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/projects/particle-cleanup'
  },
  'skills': {
    title: 'Skills - Riley Hoffman - Web Developer',
    description: 'My skills. Riley Hoffman - Web Developer.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/skills'
  },
  'faq': {
    title: 'FAQ - Riley Hoffman - Web Developer',
    description: 'Find the answers to my most frequently asked questions.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/faq'
  },
  'contact': {
    title: 'Contact - Riley Hoffman - Web Developer',
    description: 'Contact Web Developer Riley Hoffman with the form on this page.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/contact'
  },
  'accessibility': {
    title: 'Accessibility - Riley Hoffman - Web Developer',
    description: 'As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com/accessibility'
  },

};

const page = process.env.PAGE || 'home';

const meta = metadata[page] || {
    title: 'Riley Hoffman - Web Developer',
    description: 'I\'m a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.',
    image: 'https://rileyhoffman.com/thumbnail.jpg',
    url: 'https://rileyhoffman.com'
};

const indexHtmlPath = 'public/index.html';
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${meta.title}</title>`);
indexHtml = indexHtml.replace(/<meta property="og:title" content=".*">/, `<meta property="og:title" content="${meta.title}">`);
indexHtml = indexHtml.replace(/<meta name="description" content=".*">/, `<meta name="description" content="${meta.description}">`);
indexHtml = indexHtml.replace(/<meta property="og:image" content=".*">/, `<meta property="og:image" content="${meta.image}">`);
indexHtml = indexHtml.replace(/<meta property="og:url" content=".*">/, `<meta property="og:url" content="${meta.url}">`);
indexHtml = indexHtml.replace(/<link rel="canonical" href=".*" \/>/, `<link rel="canonical" href="${meta.url}" />`);

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf-8');
