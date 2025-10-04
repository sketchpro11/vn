import { forwardRef } from 'react'
import './ShimmerButton.css'

const ShimmerButton = forwardRef(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '10px',
      background = '#334cec',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          '--spread': '90deg',
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        }}
        className={`shimmer-button ${className}`}
        ref={ref}
        {...props}
      >
        <div className="shimmer-spark-container">
          <div className="shimmer-spark">
            <div className="shimmer-spark-before" />
          </div>
        </div>
        {children}
        <div className="shimmer-highlight" />
        <div className="shimmer-backdrop" />
      </button>
    )
  }
)

ShimmerButton.displayName = 'ShimmerButton'

export default ShimmerButton
