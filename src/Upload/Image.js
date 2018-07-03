import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { uploadClass } from '../styles'
import Upload from './Upload'
import { ERROR } from './ajax'

class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.beforeUpload = this.beforeUpload.bind(this)
  }

  beforeUpload(blob, callback) {
    const reader = new FileReader()
    const { imageSize } = this.props.validator
    const file = {}

    reader.onload = (e) => {
      const data = e.target.result
      file.data = data
      if (!imageSize) {
        callback(file)
        return
      }

      const image = new window.Image()
      image.onload = () => {
        const res = imageSize(image)
        if (res instanceof Error) {
          file.status = ERROR
          file.message = res.message
        }
        callback(file)
      }
      image.src = data
    }

    reader.readAsDataURL(blob)
  }

  render() {
    const {
      children, width, height, ...others
    } = this.props

    const style = { width, height }
    const content = children || <div className={uploadClass('indicator')} />

    return (
      <Upload {...others} imageStyle={style} beforeUpload={this.beforeUpload}>
        <div style={style} className={uploadClass('image-plus', 'image-item')}>
          {content}
        </div>
      </Upload>
    )
  }
}

Image.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.any,
  height: PropTypes.number,
  recoverAble: PropTypes.bool,
  validator: PropTypes.shape({
    imageSize: PropTypes.func,
    size: PropTypes.func,
  }),
  width: PropTypes.number,
}

Image.defaultProps = {
  accept: 'image/*',
  height: 80,
  recoverAble: false,
  validator: {},
  width: 80,
}

export default Image
