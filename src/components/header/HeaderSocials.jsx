import React from 'react';
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs';

function HeaderSocials() {
  const social = [
    {name: 'linkedin', link: "https://www.linkedin.com/", icon: <BsLinkedin/>},
    {name: 'facebook', link: "https://www.facebook.com/", icon: <BsFacebook/>},
    {name: 'github', link: "https://github.com/", icon: <BsGithub/>}
  ];
  
  return (
    <div 
      className="header__socials"
      data-testid="header-socials-container">
        {social.map((item) => (
          <a 
            href={item.link} 
            target="_blank"
            data-testid={`header-socials-${item.name}`}
            key={item.name}>{item.icon}</a>
          ))}
        </div>
  )
}

export default HeaderSocials;