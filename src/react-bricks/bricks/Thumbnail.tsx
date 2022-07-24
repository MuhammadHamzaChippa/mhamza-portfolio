import React from "react";
import { types, Text, RichText, Image, Repeater } from "react-bricks/frontend";
import blockNames from "./utils/blockNames";
const Thumbnail: types.Brick = ({ ...rest }) => {
    return (
        <div className="my-6 mx-6 p-6 text-center  rounded-lg shadow-xl bg-[#292a2d]" {...rest}>
            <Image propName="image" alt="Fallback alt tag" maxWidth={200} imageClassName="mb-6 rounded-lg" />

            <Text
                propName="title"
                renderBlock={({ children }) => <h1 className="text-2xl text-[white] font-bold">{children}</h1>}
                placeholder="Type a title..."
            />

            <RichText
                propName="description"
                renderBlock={({ children }) => <p className="text-lg text-gray-300">{children}</p>}
                placeholder="Type a description"
                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Highlight]}
            />

            <Repeater
                propName="bulletListItems"
                itemProps={{
                    className: "w-fit text-lg",
                }}
                renderWrapper={(items) => (
                    <div className="mt-4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-5 ">{items}</div>
                )}
            />

            <Repeater
                propName="buttons"
                renderWrapper={(items) => <div className="flex items-center justify-center flex-col sm:flex-row mt-4">{items}</div>}
            />

        </div>
    );
};

Thumbnail.schema = {
    name: "thumbnail",
    label: "Thumbnail",
    getDefaultProps: () => ({
        title: "Hello, world!",
        description: "Lorem ipsum dolor sit amet.",
        // No default provided for the image => we'll do it later
    }),
    sideEditProps: [],
    repeaterItems: [
        {
            name: "bulletListItems",
            itemType: blockNames.BulletListItem,
            itemLabel: "Feature",
            min: 0,
        },
        {
            name: "buttons",
            itemType: blockNames.Button,
            itemLabel: "Button",
            min: 0,
            max: 2,
        },
    ],
};

export default Thumbnail;
