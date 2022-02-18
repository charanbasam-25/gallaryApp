// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, thumbnailId, displayImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = eachImage

  const displayImageButton = () => {
    displayImage(thumbnailId)
  }

  const classNameMethod = () => (isActive ? 'bright-color' : 'light-color')

  return (
    <li className="each-image-list">
      <button onClick={displayImageButton} className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classNameMethod}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
