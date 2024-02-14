import React from 'react';
import {SubHeading} from '../../components'
import './Header.css';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p_opensans app_header_desc'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ratione enim, aut dolor velit a adipisci? Voluptates quasi ullam possimus, pariatur quibusdam consequatur vero aliquid laborum consectetur mollitia sed nobis maxime facilis cumque deserunt? Eum quas recusandae non optio, quidem molestiae illo maiores eligendi, hic dolor accusantium eaque officia adipisci?
      </p>
    </div>

    <div className="app__wrapper_img">
        <img src={images.welcome} alt='Welcome'/>
    </div>
  </div>
);

export default Header;
