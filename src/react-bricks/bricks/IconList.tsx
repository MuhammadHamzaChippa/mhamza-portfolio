import * as React from "react";
import classNames from "classnames";
import { BsCodeSlash } from "react-icons/bs";
import { Text, types } from "react-bricks/frontend";
import { bulletColors } from "./utils/colors";
import blockNames from "./utils/blockNames";
import { BulletColorsSideEditProps, BulletIconSideEditProps } from "./utils/LayoutSideProps";
import { Icon } from "@iconify/react";

export interface BulletListItemProps {
    color: { color: string; className: string; className2: string };
    iconClass: string;
    className: string;
    attributes: string;
}

const IconList: types.Brick<BulletListItemProps> = ({
    color = bulletColors.pinkLight.value,
    iconClass = "",
    className,
    ...rest
}) => {
    const isIcon = !!iconClass.length
    return (
        
        <div className={classNames("flex justify-start items-center py-2 leading-tight", className)} {...rest}>
            {isIcon ? (
                <div className={`${color?.className2} mr-4 text-[24px] flex justify-center items-center`}>
                    <Icon icon={`${iconClass}`} inline={true} color={color?.color}  />
                </div>
            ) : (
                <div
                    className={classNames(
                        "flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm",
                        color.className
                    )}
                    style={{ minWidth: "1.25rem" }}
                >
                    <BsCodeSlash />
                </div>
            )}

            <Text
                propName="text"
                renderBlock={(props) => (
                    <span className={classNames("dark:text-gray-100", color.className2 , `${isIcon ? "lg:opacity-100 md:opacity-100 opacity-0 " : ""}` )} {...props.attributes}>
                        {props.children}
                    </span>
                )}
                placeholder="Type..."
            />
        </div>
    );
};

IconList.schema = {
    name: blockNames.BulletListItem,
    label: "List item",
    category: "rb-ui website",
    hideFromAddMenu: true,
    playgroundLinkLabel: "View source code on Github",
    playgroundLinkUrl:
        "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/BulletListItem.tsx",

    getDefaultProps: () => ({
        color: bulletColors.pinkLight.value,
        text: "New item",
    }),
    sideEditProps: [BulletColorsSideEditProps, BulletIconSideEditProps],
};

export default IconList;
