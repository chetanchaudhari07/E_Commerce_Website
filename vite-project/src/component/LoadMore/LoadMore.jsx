import React from 'react';


const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <button onClick={() => onLoadMoreEvt()}>
      Load More
    </button>
  );
};

export default LoadMore;