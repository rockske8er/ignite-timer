import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 74rem;
  height: calc(100vh - 5rem);
  margin: 2.5rem auto;
  background-color: ${({ theme }) => theme.colors['gray-800']};
  border-radius: 0.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`
