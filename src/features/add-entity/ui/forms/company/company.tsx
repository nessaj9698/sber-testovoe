import { useAddCompanyMutation } from 'entities/companies'

import { Form } from 'shared/ui/form'

type Props = {
  onClose: () => void
}

export const AddCompanyForm = ({ onClose }: Props) => {
  const [addCompany] = useAddCompanyMutation()

  const handleSubmit = (value: string) => {
    addCompany(value)
    onClose()
  }

  return (
    <Form
      submitHandler={(value: string) => handleSubmit(value)}
      formTitle='Добавить компанию'
      inputPlaceholder='Название компании'
      buttonText='Добавить'
    />
  )
}
