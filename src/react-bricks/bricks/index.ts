import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import IconList from './IconList'
import CustomTextImage from './CustomTextImage'
import CustomListImage from './CustomListImage'
import Title from './Title'
import Thumbnail from './Thumbnail'
import ProjectGallery from './ProjectsGallery'
import HeroUnit from './HeroUnit'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit,
  CustomTextImage,
  IconList, 
  Title, 
  CustomListImage, 
  Thumbnail,
  ProjectGallery
   // Example custom brick
  // Put here your other bricks...
]

export default bricks
