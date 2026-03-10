import { CrossSVGIcon } from "../SVGIcons";
import { CheckSVGIcon } from "../SVGIcons";
import {
  containerClasses,
  iconWrapperClasses,
  iconClasses,
  contentWrapperClasses,
  contentClasses,
} from "./Message.styles";

import { MESSAGE_TYPE, type IMessage } from "./Message.types";

import type { FC } from "react";

const getIcon = (type: MESSAGE_TYPE) =>
  ({
    [MESSAGE_TYPE.success]: CheckSVGIcon,
    [MESSAGE_TYPE.danger]: CrossSVGIcon,
  })[type];

export const Message: FC<IMessage> = ({ type, text }) => {
  const MessageIcon = getIcon(type as MESSAGE_TYPE);

  return (
    <div className={containerClasses}>
      <div className={iconWrapperClasses}>
        <MessageIcon className={iconClasses} />
      </div>
      <div className={contentWrapperClasses}>
        <div className={contentClasses}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
