import React, { useState } from 'react';
import './Nav.scss';
import { BiHomeSmile } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { SiKnowledgebase, SiCodeproject } from 'react-icons/si';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { MdOutlineContactPhone, MdOutlineHomeRepairService } from 'react-icons/md';

function Nav() {

  const sections = [
    { 
      title: 'home',
      icon: <BiHomeSmile/>
    },
    { 
      title: 'about',
      icon: <FiUser/>
    },
    { 
      title: 'experience',
      icon: <SiKnowledgebase/>
    },
    { 
      title: 'services',
      icon: <MdOutlineHomeRepairService/>
    },
    { 
      title: 'projects',
      icon: <SiCodeproject/>
    },
    { 
      title: 'testimonials',
      icon: <CgSmileMouthOpen/>
    },
    { 
      title: 'contact',
      icon: <MdOutlineContactPhone/>
    }
  ];

  const [activeNav, setActiveNav] = useState('home');
  return (
    <nav data-testid="navigation-container">
      {sections.map((section) => (
        <a 
        href={section.title === 'home'? '#': `#${section.title}`}
        data-testid={`navigation-${section.title}`}
        className={activeNav === section.title ? 'active': 'inactive'}
        onClick={() => setActiveNav(section.title)}
        >
          {section.icon}
      </a>
      ))}
    </nav>
  )
}

export default Nav;