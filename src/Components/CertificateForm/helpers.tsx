export const CertificatePager = (openFn: OpenComponentFn) => {
  const { changePage, currentPage } = usePager(CertificateFormStateMachine);

  return currentPage(changePage, open);
};
