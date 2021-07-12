import React from 'react';

export const usePager = (config: any) => {
  const [currentPage, setCurrentPage] = React.useState(config);

  const changePage = (dest: string) => {
    if (config[dest]) {
      setCurrentPage(config[dest].currentPage);
    }
  };

  return {
    currentPage,
    changePage
  };
};
