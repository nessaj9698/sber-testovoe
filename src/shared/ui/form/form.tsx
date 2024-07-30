import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { Input } from '@mui/material'
import { useStyles } from './styles'
import { formValidation } from 'shared/validations'

type Props = {
  formTitle: string
  inputPlaceholder: string
  buttonText: string
  submitHandler: (value: string) => void
  initialValue?: string
}

export const Form = ({
  formTitle,
  inputPlaceholder,
  buttonText,
  submitHandler,
  initialValue = '',
}: Props) => {
  const formik = useFormik({
    initialValues: {
      text: initialValue,
    },
    onSubmit: values => {
      submitHandler(values.text)
    },
    validationSchema: formValidation,
    validateOnBlur: true,
    validateOnChange: false,
  })

  const { classes } = useStyles()

  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.formTitle}>{formTitle}</h3>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Input
          id='text'
          name='text'
          type='text'
          className={classes.textInput}
          onChange={formik.handleChange}
          value={formik.values.text}
          placeholder={inputPlaceholder}
          error={formik.touched.text && Boolean(formik.errors.text)}
        />

        <Button type='submit'>{buttonText}</Button>
        <span className={classes.errorBlock}>{formik.errors.text}</span>
      </form>
    </div>
  )
}
