declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    import React from "react";
    const content: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
declare module "*.png" {}
declare module "*.jpeg" {}
