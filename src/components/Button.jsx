import { forwardRef } from 'react'
import './Button.css'

const Button = forwardRef(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={`btn btn-${variant} btn-${size} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
