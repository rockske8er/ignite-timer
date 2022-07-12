import { Play } from 'phosphor-react'
import {
  Container,
  Form,
  InputsContainer,
  CoutdownContainer,
  SubmitButton,
  Separator,
  TaskInput,
  MinutesInput,
} from './styles'

export function Home() {
  return (
    <Container>
      <Form>
        <InputsContainer>
          <datalist id="task-suggestions">
            <option value={'Projeto 1'} />
            <option value={'Projeto 3'} />
            <option value={'Projeto 2'} />
            <option value={'Projeto 4'} />
          </datalist>

          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list="task-suggestions" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />
        </InputsContainer>

        <CoutdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CoutdownContainer>

        <SubmitButton type="submit">
          <Play size={24} /> Começar
        </SubmitButton>
      </Form>
    </Container>
  )
}
