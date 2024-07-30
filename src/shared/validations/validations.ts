import * as Yup from 'yup'

export const formValueValidation = Yup.string()
  .min(2, 'Минимум 2 символа')
  .max(30, 'Максимум 30 символов')
  .required('Обязательное поле')

export const formValidation = Yup.object().shape({
  text: formValueValidation,
})
