import React from 'react';
import PropTypes from 'prop-types';

const Story = ({
  img, title, description, author,
}) => (
  <div className="row">
    <div className="story">
      <figure className="story__shape">
        <img className="story__img" src={img} alt="person review" />
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {title}
        </h3>
        <p>
          {description}
        </p>
        <p>
            --
          {author}
        </p>
      </div>
    </div>
  </div>
);
Story.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};
export default Story;
