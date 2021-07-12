import React from 'react';

export const usePager = (config: any) => {
  const [currentPage, setCurrentPage] = React.useState(config.init);

  console.log('boaz', config);

  const changePage = (dest: string) => {
    if (config[dest]) {
      setCurrentPage(config[dest].currentPage);
    }
  };

  console.log(currentPage);

  return {
    currentPage,
    changePage
  };
};
