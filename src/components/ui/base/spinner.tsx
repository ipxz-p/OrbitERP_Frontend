import CircularProgress from "@mui/material/CircularProgress"
import type { CircularProgressProps } from "@mui/material/CircularProgress"

export type SpinnerProps = CircularProgressProps

const BaseSpinner = (props: SpinnerProps) => {
  return <CircularProgress {...props} />
}

export default BaseSpinner
