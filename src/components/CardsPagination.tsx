import { Pagination } from 'react-bootstrap'
import styled from 'styled-components'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  groupSize: number
}

const PaginationWrapper = styled(Pagination)`
  --bs-pagination-color: var(--text-secondary);
  --bs-pagination-bg: var(--bg-color-light);
  --bs-pagination-border-color: rgba(255, 255, 255, 0.1);
  --bs-pagination-hover-bg: var(--accent);
  --bs-pagination-hover-color: #1a1a2e;
  --bs-pagination-hover-border-color: var(--accent);
  --bs-pagination-active-bg: var(--accent);
  --bs-pagination-active-border-color: var(--accent);
  --bs-pagination-active-color: #1a1a2e;
  --bs-pagination-disabled-bg: var(--bg-color-light);
  --bs-pagination-disabled-border-color: rgba(255, 255, 255, 0.1);

  gap: 8px;
  margin-top: 48px;

  .page-link {
    border-radius: var(--radius-sm);
    min-width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: all var(--transition-fast);

    &:focus {
      box-shadow: none;
    }
  }

  .page-item {
    transition: transform var(--transition-fast);

    &:hover:not(.disabled) {
      transform: translateY(-2px);
    }
  }
`

export function CardsPagination({ currentPage, totalPages, onPageChange, groupSize = 1 }: Props) {
  if (totalPages <= 1) return null

  const currentGroup = Math.floor((currentPage - 1) / groupSize)
  const startPage = Math.max(1, currentGroup * groupSize + 1)
  const endPage = Math.min(startPage + groupSize - 1, totalPages)

  const pages: (number | 'ellipsis-prev' | 'ellipsis-next')[] = []

  pages.push(1)

  if (startPage > 2) pages.push('ellipsis-prev')

  for (let i = startPage; i <= endPage; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i)
    }
  }

  if (endPage < totalPages - 1 && totalPages > groupSize) pages.push('ellipsis-next')

  if (totalPages > 1) pages.push(totalPages)

  return (
    <PaginationWrapper className="d-flex justify-content-center flex-wrap w-100" data-bs-theme="dark">
      <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />

      {pages.map((page, idx) => {
        if (page === 'ellipsis-prev') {
          const target = Math.max(1, startPage - groupSize)
          return <Pagination.Ellipsis key={`ep-${idx}`} onClick={() => onPageChange(target)} />
        }
        if (page === 'ellipsis-next') {
          const target = Math.min(totalPages, endPage + 1)
          return <Pagination.Ellipsis key={`en-${idx}`} onClick={() => onPageChange(target)} />
        }
        return (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        )
      })}

      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </PaginationWrapper>
  )
}
