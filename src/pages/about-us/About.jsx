import React from 'react';
import AboutImg from "../../../public/about-img.png"
const About = () => {
    return (
        <div className='w-full h-full flex justify-center flex-wrap items-center overflow-y-auto gap-4 overflow-y-scrollauto'>
          <div className='p-12'>
            <p className='pb-2 text-xl text-orange-400 '>What We Offer:</p>
            Our Skills
Our creative team will start from scratch to create custom content that embodies and enrichens your brand. Take your marketing strategy to another level and distinguish yourself from your competitors.
Our talents are not limited to one medium. We create uniquely tailored images, videos, web design, advertising, events, digital signage and more just for you.
</div>
<img src={AboutImg} alt='AboutImage'/>
        </div>
    );
}

export default About;
