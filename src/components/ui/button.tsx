import Button, { type ButtonProps } from '@mui/material/Button';

type BaseButtonProps = ButtonProps

const BaseButton = (props: BaseButtonProps) => {
  return (
    <Button variant="contained" {...props} />
  )
}

export default BaseButton