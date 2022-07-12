import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const schema = zod.object({
  task: zod.string().min(1, {
    message: 'Informe a tarefa',
  }),
  minutesAmount: zod.number().min(5).max(60),
})

type FormDataProps = zod.infer<typeof schema>

export function Home() {
  const { register, watch, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')

  const handleCreateTask = (data: FormDataProps) => {
    console.log(data)

    reset()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateTask)}>
        <InputsContainer>
          <datalist id="task-suggestions">
            <option value={'Projeto 1'} />
            <option value={'Projeto 3'} />
            <option value={'Projeto 2'} />
            <option value={'Projeto 4'} />
          </datalist>

          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder={'Dê um nome para seu projeto'}
            {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount')}
          />
        </InputsContainer>

        <CoutdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CoutdownContainer>

        <SubmitButton type="submit" disabled={!task}>
          <Play size={24} /> Começar
        </SubmitButton>
      </Form>
    </Container>
  )
}
