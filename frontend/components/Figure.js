import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.figure`
  padding: 1rem;
  min-width: 100%;
  max-width: 100%;
  border: 3px dotted dimgrey;
  border-radius: 21px;
  border-opacity: 50%;

  figcaption {
    font-style: italic;
  }

  img {
  min-width: 100%;
  max-width: 100%
  }
`;
export default function Figure({ image, author, date, media_type }) {
  return (
    <StyledFigure>
      {media_type === 'video' ? (
        <div className='video-responsive'>
          <iframe
            width='100%'
            height='480'
            src={`${image}?autoplay=1&mute=1`}
            allow='autoplay; fullscreen'
            allowFullScreen='true'
            title='Embedded YouTube'
          />
          <figcaption>
            The Photo of the Day by {author} on {date}
          </figcaption>
        </div>
      ) : (
        <>
          <img src={image} />
          <figcaption>
            The Photo of the Day by {author} on {date}
          </figcaption>
        </>
      )}
    </StyledFigure>
  );
}
