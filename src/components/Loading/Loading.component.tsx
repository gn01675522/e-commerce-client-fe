import { containerClasses, loaderClasses } from "./Loading.styles";

import type { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className={containerClasses}>
      <div className={loaderClasses} />
    </div>
  );
};
