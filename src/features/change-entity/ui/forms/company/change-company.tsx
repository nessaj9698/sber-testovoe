import { useEditCompanyMutation } from 'entities/companies'
import { Form } from 'shared/ui/form'

type Props = {
  id: number
  initialValue: string
  onClose: () => void
}

export const ChangeCompanyForm = ({ id, initialValue, onClose }: Props) => {
  const [changeCompany] = useEditCompanyMutation()

  const handleSubimt = (value: string) => {
    changeCompany({ id, title: value })
    onClose()
  }

  return (
    <Form
      submitHandler={value => handleSubimt(value)}
      formTitle='Изменить компанию'
      inputPlaceholder='Новое название'
      buttonText='Изменить'
      initialValue={initialValue}
    />
  )
}
