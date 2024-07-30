import { useAddEmployeeMutation } from 'entities/employee'
import { Form } from 'shared/ui/form'

type Props = {
  companyId: number
  onClose: () => void
}

export const AddEmployeeForm = ({ companyId, onClose }: Props) => {
  const [addEmployee] = useAddEmployeeMutation()
  const handleSubmit = (value: string) => {
    addEmployee({ companyId, name: value })
    onClose()
  }

  return (
    <Form
      submitHandler={(value: string) => handleSubmit(value)}
      formTitle='Добавить сотрудника'
      inputPlaceholder='Имя сотрудника'
      buttonText='Добавить'
    />
  )
}
