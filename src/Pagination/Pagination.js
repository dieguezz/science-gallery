import React from 'react'

export function Pagination({ page, totalPages, setPage }) {
  return (
    <div>
      <button
        disabled={page <= 0}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        disabled={page >= totalPages}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
