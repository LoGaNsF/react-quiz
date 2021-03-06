import React from 'react'
import classNames from 'classnames'

const ProgressBar = ({ min = 0, max = 100, value = 0, customClassNames = {} }) => {
  const progressSize = {
    width: ((value - min) / (max - min) * 100) + '%'
  }

  const progressBarClassName = classNames('rq-ProgressBar', customClassNames['rq-ProgressBar'])
  const progressBarInnerClassName = classNames('rq-ProgressBar-inner', customClassNames['rq-ProgressBar-inner'])

  // Displays the progress bar size accordingly max, min, current value and isVisible
  return (
    <div className={progressBarClassName}>
      <div className={progressBarInnerClassName} role="progressbar"
           aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
           style={progressSize}>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  value: React.PropTypes.number,
}

export default ProgressBar
