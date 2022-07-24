import React from "react";
import { Size } from "./utils/Container";
import { bgColors, textColors } from "./utils/colors";
import Section from "./utils/Section";
import Container from "./utils/Container";
import classNames from "classnames";
import { types, Repeater } from "react-bricks/frontend";
import { BackgroundColorsSideEditProps, ContainerSizeSideEditProps } from "./utils/LayoutSideProps";
export interface TextImageProps {
    bg?: { color: string; className: string };
    width?: Size;
}

const CustomTextImage: types.Brick<TextImageProps> = ({
    bg = bgColors.white.value,
    width = "lg",
}) => {
    return (
        <Section bg={bg}>
            <Container
                size={width}
                className={classNames(
                    "  flex flex-no-wrap md:items-start justify-center md:space-x-3"
                )}
            >
                <div className="sm:grid grid-cols-4 ">
                    <Repeater propName="thumbnails" />
                </div>
            </Container>
        </Section>
    );
};

CustomTextImage.schema = {
    name: "gallery",
    label: "Gallery",
    category: "rb-ui website",

    getDefaultProps: () => ({
        bg: {
            color: "#fff",
            className: "bg-white dark:bg-gray-900",
        },
        thumbnails: [],
    }),
    sideEditProps: [
        {
            groupName: "Layout",
            defaultOpen: false,
            props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
        },
    ],
    repeaterItems: [
        {
            name: "thumbnails",
            itemType: "thumbnail",
            itemLabel: "Thumbnail",
        },
    ],
};

export default CustomTextImage;
