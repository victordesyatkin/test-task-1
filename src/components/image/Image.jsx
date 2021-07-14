import React, { useReducer, useCallback } from 'react';

import './image.scss';

const Image = ({
  image,
  defaultSrc,
  alt = 'image for test',
  noData = 'Sorry, no image',
}) => {
  const [state, setState] = useReducer(
    (previousState, nextState) => ({ ...previousState, nextState }),
    {
      src: image,
      isDefaultSrc: false,
      isContent: false,
    }
  );
  const { src, isDefaultSrc, isContent } = state;
  const onError = useCallback(() => {
    if (isDefaultSrc) {
      setState(state, {
        isContent: true,
      });
    } else if (defaultSrc) {
      setState(state, {
        src: defaultSrc,
      });
    }
  }, [isDefaultSrc, defaultSrc, state]);
  return (
    <div className="image">
      {isContent ? (
        <p className="image__no-data">{noData}</p>
      ) : (
        <img alt={alt} src={src} onError={onError} className="image__content" />
      )}
    </div>
  );
};

export default Image;
