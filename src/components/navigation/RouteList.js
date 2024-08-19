import Home from '../../pages/home/Home';
import Projects from '../../pages/projects/Projects';
import Skills from '../../pages/skills/Skills';
import Faq from '../../pages/faq/Faq';
import Contact from '../../pages/contact/Contact';
import Accessibility from '../../pages/Accessibility';
import ParticleCleanup from '../../pages/projects/particle-cleanup/ParticleCleanup';

export const RouteList = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/projects', component: Projects, name: 'Projects' },
    { path: '/projects/particle-cleanup', component: ParticleCleanup, name: 'Particle Cleanup Game' },
    { path: '/skills', component: Skills, name: 'Skills' },
    { path: '/faq', component: Faq, name: 'FAQ' },
    { path: '/contact', component: Contact, name: 'Contact' },
    { path: '/accessibility', component: Accessibility, name: 'Accessibility' },
];
