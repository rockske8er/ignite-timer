import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      color: ${({ theme }) => theme.colors['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme.colors['green-500']};
      }
    }
  }
`
