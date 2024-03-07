import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef app__wrapper section__padding app__bg' id='chef'>

    <div className="app__wrapper_img">
          <img src={images.chef} alt='Chef'/>
      </div>

    <div className="app__wrapper_info chefs_word">
      <SubHeading title="Chef's Word"/>
      <h1 className='app__chef-h1'>What We Belive In</h1>
      <p className='p__opensans app_chef_desc'><span className='chefs_quote'><img src={images.quote} alt='Large Quotation Mark'/></span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>

      <h4 className='headtext__cormorant ' id='chef__name'>Kevin Luo</h4>
      <p className='p__opensans'>Chef & Founder</p>

      <img src={images.sign} alt='Chef Signature' className='chef__sign'/>

    </div>


</div>
);

export default Chef;
