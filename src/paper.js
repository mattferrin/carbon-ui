import React, { View, PropTypes } from 'react-native'
import Uranium from 'uranium'

import Shadows from './styles/Shadows'
import { gu } from './styles/Grid'

const Paper = ({ style, css, children, elevation, ...other }) =>
  <View
    css={[
      styles.base,
      { ...Shadows[`dp${elevation}`] },
    ].concat(style, css)}
    {...other}>
    {children}
  </View>

Paper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  css: PropTypes.object,

  elevation: PropTypes.number,
}

Paper.defaultProps = {
  elevation: 2,
}

export default Uranium(Paper)


const styles = {
  base: {
    padding: 4 * gu,
    marginBottom: 4 * gu,

    backgroundColor: 'white',
  },
}