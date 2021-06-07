/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CrossButton {
        "circle": boolean;
        "color": string;
        "disabled": boolean;
        "fullWidth": boolean;
        "outline": boolean;
        "pill": boolean;
        "selected": boolean;
        "size": string;
        "square": boolean;
        "type": string;
    }
}
declare global {
    interface HTMLCrossButtonElement extends Components.CrossButton, HTMLStencilElement {
    }
    var HTMLCrossButtonElement: {
        prototype: HTMLCrossButtonElement;
        new (): HTMLCrossButtonElement;
    };
    interface HTMLElementTagNameMap {
        "cross-button": HTMLCrossButtonElement;
    }
}
declare namespace LocalJSX {
    interface CrossButton {
        "circle"?: boolean;
        "color"?: string;
        "disabled"?: boolean;
        "fullWidth"?: boolean;
        "outline"?: boolean;
        "pill"?: boolean;
        "selected"?: boolean;
        "size"?: string;
        "square"?: boolean;
        "type"?: string;
    }
    interface IntrinsicElements {
        "cross-button": CrossButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cross-button": LocalJSX.CrossButton & JSXBase.HTMLAttributes<HTMLCrossButtonElement>;
        }
    }
}