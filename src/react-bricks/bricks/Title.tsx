import classNames from 'classnames'
import * as React from 'react'
import {  RichText, types } from 'react-bricks/frontend'
import { BackgroundColorsSideEditProps } from './utils/LayoutSideProps'
import { bgColors, GradientName, gradients, textColors } from './utils/colors'
import Container from './utils/Container'
import Section from './utils/Section'
import Fade from "react-reveal/Fade";
export interface TitleProps {
  bg?: { color: string; className: string }
  size?: 'medium' | 'large'
  textGradient?: GradientName
}

const Title: types.Brick<TitleProps> = ({
  bg = bgColors.white.value,
  textGradient = 'none',
  size = 'large',
}: TitleProps) => {
  const titleColor = textColors.gray800
  const highlightColor = textColors.purple500
  const titleStyle =
    textGradient !== 'none' ? { WebkitTextFillColor: 'transparent' } : {}

  return (
    <Section bg={bg}>
      <Container size="lg" className="py-4 xl:py-4">
        <div className="max-w-xl mx-auto px-5">

          <div
            className={classNames(
              titleColor,
              gradients[textGradient],
              'text-3xl',
              { 'sm:text-5xl': size === 'large' },
              { 'sm:text-4xl': size === 'medium' }
            )}
            style={titleStyle}
          >
            <Fade bottom duration={2000} distance="20px">
            <RichText
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    'text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r',
                    titleColor
                  )}
                  style={{ lineHeight: 1.1 }}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              placeholder="Type a title..."
              propName="title"
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={(props) => (
                <span className={highlightColor} {...props.attributes}>
                  {props.children}
                </span>
              )}
            />
            </Fade>
          </div>

     
        </div>
      </Container>
    </Section>
  )
}

Title.schema = {
  name: "Title",
  label: 'Title',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    size: 'large',
    textGradient: 'none',
    title: 'We develop beautiful web applications',
  }),

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps],
    },
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [
        {
          name: 'textGradient',
          label: 'Text gradient',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'ocean', label: 'Ocean' },
              { value: 'violet', label: 'Violet' },
              { value: 'sun', label: 'Sunset' },
            ],
          },
        },
        {
          name: 'size',
          label: 'Title size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
      ],
    },
  ],
}

export default Title