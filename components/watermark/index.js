import React from 'react'
import PropTypes from 'prop-types'
import Watermark from './watermark'
function randomString (len) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  len = len || 32
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
class WatermarkComponent extends React.Component {
  constructor (props) {
    super(props)

    this.rootRef = React.createRef()
  }
  componentDidMount () {
    const container = this.rootRef.current
    const { props } = this
    const options = {
      ...props,
      id: props.id || 'hi-' + randomString(4)
    }
    Watermark(container, options)
  }
  render () {
    return (
      <div ref={this.rootRef} style={{ overflow: 'hidden' }}>
        {this.props.children}
      </div>
    )
  }
}

WatermarkComponent.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  textAlign: PropTypes.string,
  font: PropTypes.string,
  fillStyle: PropTypes.string,
  contents: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  rotate: PropTypes.number,
  zIndex: PropTypes.number,
  logo: PropTypes.string,
  grayLogo: PropTypes.bool,
  isAutoWrap: PropTypes.bool,
  textOverflowEffect: PropTypes.oneOfType(['zoom', 'cut'])
}

WatermarkComponent.defaultProps = {
  id: null,
  width: 240,
  height: 240,
  textAlign: 'left',
  font: '14px microsoft yahei',
  fillStyle: 'rgba(128, 128, 128, 0.2)',
  contents: '请勿外传',
  rotate: '0',
  zIndex: 1000,
  logo: null,
  grayLogo: true,
  isAutoWrap: true,
  textOverflowEffect: 'zoom'
}
export default WatermarkComponent
export { Watermark }