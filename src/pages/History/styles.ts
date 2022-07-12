import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: ${({ theme }) => theme.colors['gray-600']};

      th {
        padding: 1rem;
        text-align: left;
        color: ${({ theme }) => theme.colors['gray-100']};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 0.5rem;
          padding-left: 1.5rem;
        }

        &:last-child {
          border-top-right-radius: 0.5rem;
          padding-right: 1.5rem;
        }
      }
    }

    tbody {
      tr {
        td {
          background-color: ${({ theme }) => theme.colors['gray-700']};
          border-top: 0.125rem solid ${({ theme }) => theme.colors['gray-800']};
          padding: 1rem;
          font-size: 0.875rem;

          &:first-child {
            width: 50%;
            padding-left: 1.5rem;
          }

          &:last-child {
            padding-right: 1.5rem;
          }
        }
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

type StatusProps = {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, statusColor }) =>
      theme.colors[STATUS_COLORS[statusColor]]};
  }
`
