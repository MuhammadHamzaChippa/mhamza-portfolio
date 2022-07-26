import React from 'react'
import { Size } from './utils/Container'
import { bgColors, textColors } from './utils/colors'
import Section from './utils/Section'
import Container from './utils/Container'
import classNames from 'classnames'
import { Image, Link, Repeater, RichText, types } from 'react-bricks/frontend'
import blockNames from './utils/blockNames'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from './utils/LayoutSideProps'
import Fade from 'react-reveal/Fade'

export interface TextImageProps {
  bg?: { color: string; className: string }
  width?: Size
  heroTitle?: boolean
  mobileTextCenter?: boolean
  multiple?: boolean
  imageSide?: 'left' | 'right'
  mobileImageTop?: boolean
  mobileIcon?: boolean
  hasShadow?: boolean
  isRounded?: boolean
  bulletsVariant?: { color: string; className: string }
}

const CustomListImage: types.Brick<TextImageProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
  heroTitle = false,
  mobileTextCenter = false,
  multiple = false,
  imageSide = 'right',
  mobileImageTop = false,
  mobileIcon = false,
  hasShadow = false,
  isRounded = false,
  // bulletsVariant = bulletColors.pinkLight.value,
}) => {
  const titleColor = textColors.gray900
  const highlightColor = textColors.purple500
  const textColor = textColors.gray700

  return (
    <Section bg={bg}>
      <Container
        size={width}
        className={classNames(
          'py-12 lg:py-20 flex flex-no-wrap md:items-center md:space-x-8',
          mobileTextCenter ? 'items-center' : 'items-start',
          mobileImageTop ? 'flex-col-reverse' : 'flex-col',
          imageSide === 'right'
            ? 'md:flex-row'
            : 'md:flex-row-reverse md:space-x-reverse'
        )}
      >
                    <Fade bottom duration={2000} distance="20px">
        <div
          className={classNames(
            'w-full md:flex-1 flex flex-col',
            imageSide === 'right' ? 'md:pr-1/10' : 'md:pl-1/10'
          )}
        >
          
            <Repeater
              propName="badge"
              renderWrapper={(items) => (
                <div
                  className={classNames('mb-4 flex', {
                    'justify-center md:justify-start': mobileTextCenter,
                  })}
                >
                  {items}
                </div>
              )}
            />

            <RichText
              propName="title"
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    'mt-0 mb-2',
                    titleColor,
                    {
                      'text-center md:text-left': mobileTextCenter,
                    },
                    heroTitle
                      ? 'text-3xl sm:text-4xl font-black'
                      : 'text-2xl sm:text-3xl font-extrabold'
                  )}
                  style={{ lineHeight: 1.125 }}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
              placeholder="Type a title..."
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={(props) => (
                <span className={highlightColor} {...props.attributes}>
                  {props.children}
                </span>
              )}
            />


            <RichText
              propName="text"
              renderBlock={(props) => (
                <p
                  className={classNames('text-xs font-bold', textColor, {
                    'text-center md:text-left': mobileTextCenter,
                  })}
                  style={{ lineHeight: 1.6 }}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Link,
              ]}
              renderLink={(props) => (
                <Link {...props} className="text-lg">
                  {props.children}
                </Link>
              )}
            />

          
            <div>
              <Repeater
                propName="bulletListItems"
                itemProps={{
                  className: 'text-lg',
                }}
                renderWrapper={(items) => (
                  <div className="mt-4 mb-4 w-full ">{items}</div>
                )}
              />
              <>
                <RichText
                  propName="technology"
                  renderBlock={(props) => (
                    <p
                      className={classNames('text-md font-bold', textColor, {
                        'text-center md:text-left': mobileTextCenter,
                      })}
                      style={{ lineHeight: 1.6 }}
                      {...props.attributes}
                    >
                      {props.children}
                    </p>
                  )}
                  placeholder="Type a text..."
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Link,
                  ]}
                  renderLink={(props) => (
                    <Link {...props} className="text-lg">
                      {props.children}
                    </Link>
                  )}
                />
                <Repeater
                  propName="iconListItems"
                  itemProps={{
                    className: 'w-fit  text-lg',
                  }}
                  renderWrapper={(items) => (
                    <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-[15px] ">
                      {items}
                    </div>
                  )}
                />
              </>
            </div>

            <Repeater
              propName="buttons"
              renderWrapper={(items) => (
                <div className="flex items-center flex-col sm:flex-row mt-4">
                  {items}
                </div>
              )}
            />
        </div>
        {multiple ? (
          <div className="flex w-full md:w-2/5 lg:w-1/2 max-w-xs md:max-w-sm mx-auto mt-10 md:mt-0 flex-wrap justify-center -mb-6">
            <Repeater propName="logos" />
          </div>
        ) : (
          <div
            className={classNames(
              mobileIcon ? 'w-24' : 'w-full',
              mobileImageTop ? 'mt-0 mb-10' : 'mt-10 mb-0',
              'md:w-2/5 md:mt-0 md:mb-0 flex justify-center'
            )}
          >
              
              <Image
                propName="imageSource"
                alt="Image"
                imageClassName={classNames(
                  { 'rounded-lg': isRounded },
                  { 'shadow-2xl': hasShadow }
                )}
              />
          </div>
        )}
        </Fade>
      </Container>
    </Section>
  )
}



CustomListImage.schema = {
  name: 'list-image',
  label: 'List Image',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImage.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    title: 'We built hundreds of apps',
    heroTitle: false,
    mobileTextCenter: false,
    text: 'We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.',
    imageSource: {
      src: 'https://images.reactbricks.com/original/7a358d12-e668-46e4-ab81-b90431006182.png',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/7a358d12-e668-46e4-ab81-b90431006182.png',
      srcSet:
        'https://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1600.png 1600w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1200.png 1200w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-400.png 400w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-200.png 200w',
      alt: 'Dashboard',
      seoName: 'dashboard',
    },
    imageSide: 'right',
    multiple: false,
    mobileImageTop: false,
    mobileIcon: false,
    hasShadow: false,
    isRounded: false,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
    {
      groupName: 'Text',
      defaultOpen: false,
      props: [
        {
          name: 'heroTitle',
          label: 'Hero-size Title',
          type: types.SideEditPropType.Boolean,
          shouldRefreshText: true,
        },
        {
          name: 'mobileTextCenter',
          label: 'Text centered on mobile',
          type: types.SideEditPropType.Boolean,
          shouldRefreshText: true,
        },
      ],
    },
    {
      groupName: 'Image',
      defaultOpen: false,
      props: [
        {
          name: 'multiple',
          label: 'Multiple logos',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'imageSide',
          label: 'Image side',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'left', label: 'Left' },
              { value: 'right', label: 'Right' },
            ],
          },
        },
        {
          name: 'mobileImageTop',
          label: 'Image on top on mobile',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'mobileIcon',
          label: 'Show as icon on mobile',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
        {
          name: 'hasShadow',
          label: 'Image shadow',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
        {
          name: 'isRounded',
          label: 'Image rounded corners',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
      ],
    },
  ],
  repeaterItems: [
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
    {
      name: 'bulletListItems',
      itemType: blockNames.BulletListItem,
      itemLabel: 'Feature',
      min: 0,
    },
    {
      name: 'iconListItems',
      itemType: blockNames.BulletListItem,
      itemLabel: 'Icon Feature',
      min: 0,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 1,
    },
    {
      name: 'logos',
      itemType: blockNames.TextImageLogo,
      itemLabel: 'Logo',
      min: 0,
      max: 6,
    },
  ],
}

export default CustomListImage
