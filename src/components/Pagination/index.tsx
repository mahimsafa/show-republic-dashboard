
/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '@/components/Button';
import './style.css';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageButtons = () => {
    const buttons = [];

    if (currentPage > 1) {
      buttons.push(
        <Button key={1} onClick={() => onPageChange(1)} className="pagination-button inactive-page">
          1
        </Button>
      );
    }

    if (currentPage > 3) {
      buttons.push(
        <span key="ellipsis-start" className="ellipsis">...</span>
      );
    }
    buttons.push(
      <Button key={currentPage} onClick={() => onPageChange(currentPage)} className="pagination-button active-page">
        {currentPage}
      </Button>
    );

    if (currentPage < totalPages - 2) {
      buttons.push(
        <span key="ellipsis-end" className="ellipsis">...</span>
      );
    }

    if (currentPage < totalPages) {
      buttons.push(
        <Button key={totalPages} onClick={() => onPageChange(totalPages)} className="pagination-button inactive-page">
          {totalPages}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination-container">
      <Button onClick={handlePrevious} disabled={currentPage === 1} className="pagination-button prev-next">
        Prev
      </Button>
      {renderPageButtons()}
      <Button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-button prev-next">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
