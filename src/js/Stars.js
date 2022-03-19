import PropTypes from 'prop-types'
import Star from './Star'
const shortid = require('shortid');

function Stars({count}) {
  const starsArr = [...Array(count)].map(e => {return {id: shortid.generate()}})
  let result = null

  if (Number.isInteger(count) && count>=1 && count<=5) {
      result = <ul className="card-body-stars u-clearfix">{starsArr.map(e => <Star key={e.id} />)}</ul>
  }

  return (
    result
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
  count: function(props, propName, componentName) {
    if (props[propName]<1 || props[propName]>5) {
      return new Error('Некорректное значение своства в ' + componentName)
    }
  }
}

export default Stars;
