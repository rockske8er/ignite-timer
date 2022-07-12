import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

export const BaseInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors['gray-500']};
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  width: 4rem;
  color: ${({ theme }) => theme.colors['green-500']};
`

export const CoutdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors['gray-700']};
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors['gray-100']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
