import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import WatermarkComponent from '../../../components/watermark'
import logo from '../../../site/static/img/logo.png'
const prefix = 'watermark-base'
const desc = ''
const code = `import React from 'react'
import WatermarkComponent from '@hi-ui/hiui/es/WatermarkComponent'\n
class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.options = {logo: logo, rotate: -30, contents: ['HIUI', '做中台，就用 HIUI']}
  }
  render () {
    return (
      <WatermarkComponent
        {...this.options}
      >
      <div id="watermark-box" 
        style={{width: '100%', height: 400, border: '1px solid rgb(230, 231, 232)'}} ref={this.boxRef1} 
        />
      </WatermarkComponent>
    )
  }
}`

const DemoBase = () => (
  <DocViewer
    desc={desc}
    code={code}
    scope={{ WatermarkComponent, logo }}
    prefix={prefix}
  />)
export default DemoBase