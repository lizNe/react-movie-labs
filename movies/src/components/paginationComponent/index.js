import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const PaginationComponent = ({ pageCount, currentPage, onPageChange }) => {
  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  if (currentPage > 1000) {
    return (
      <Alert severity="error">
        Page number cannot exceed 1000.
      </Alert>
    );
  }

  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={pageCount}
        page={currentPage}
        color="secondary"
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PaginationComponent;
