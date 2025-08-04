import React from 'react';
import { getLanguageContent } from '../utils/language';

const About = () => {
  const content = getLanguageContent();
  
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{content.about.title}</h1>
      <p>About page coming soon...</p>
    </div>
  );
};

export default About; 