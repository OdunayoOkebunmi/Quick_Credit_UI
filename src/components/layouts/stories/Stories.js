import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Stories.scss';
import '@Common/styles/_utilities.scss';
import Story from './Story';
import StoryCollection from './data/StoryCollection';

const Stories = () => {
  const stories = StoryCollection.map((story, index) => (
    <Story
      title={story.title}
      description={story.description}
      img={story.img_src}
      author={story.author}
      key={index}
    />
  ));
  return (


    <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          we make people genuinely happy
        </h2>
      </div>
      {stories}
      <div className="u-center-text u-margin-top-huge">
        <BrowserRouter>
          <Link to="/more-stories" className="btn-text">
            Read all stories
          </Link>
        </BrowserRouter>
      </div>
    </section>
  );
};
export default Stories;
