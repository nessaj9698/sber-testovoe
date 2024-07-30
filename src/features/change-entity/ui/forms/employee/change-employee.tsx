import { useEditEmployeeMutation } from 'entities/employee'
import { Form } from 'shared/ui/form'

type Props = {
  id: number
  companyId: number
  initialValue: string
  onClose: () => void
}

export const ChangeEmployeeForm = ({
  id,
  companyId,
  initialValue,
  onClose,
}: Props) => {
  const [changeEmployee] = useEditEmployeeMutation()
  const handleSubmit = (value: string) => {
    changeEmployee({ employeeId: id, companyId, name: value })
    onClose()
  }

  return (
    <Form
      submitHandler={value => handleSubmit(value)}
      formTitle='Редактировать сотрудника'
      inputPlaceholder='Новое имя'
      buttonText='Изменить'
      initialValue={initialValue}
    />
  )
}
