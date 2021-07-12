import React from 'react';

export const usePager = (config: any) => {
  const [currentPage, setCurrentPage] = React.useState(config.init);

  const changePage = (dest: string) => {
    if (config[dest]) {
      setCurrentPage(config[dest]);
    }
  };

  return {
    currentPage,
    changePage
  };
};
