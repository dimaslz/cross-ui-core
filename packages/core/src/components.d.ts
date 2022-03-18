/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CrossButton {
        "active": boolean;
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
    interface CrossInputText {
        "color": string;
        "cols": number;
        "disabled": boolean;
        "hint": string;
        "label": string;
        "multiline": boolean;
        "placeholder": string;
        "required": boolean;
        "rows": number;
        "size": string;
        "type": string;
        "value": string;
    }
    interface CrossSelect {
        "color": string;
        "data": any[];
        "disabled": boolean;
        "hint": string;
        "label": string;
        "placeholder": string;
        "required": boolean;
        "size": string;
        "value": string;
    }
}
declare global {
    interface HTMLCrossButtonElement extends Components.CrossButton, HTMLStencilElement {
    }
    var HTMLCrossButtonElement: {
        prototype: HTMLCrossButtonElement;
        new (): HTMLCrossButtonElement;
    };
    interface HTMLCrossInputTextElement extends Components.CrossInputText, HTMLStencilElement {
    }
    var HTMLCrossInputTextElement: {
        prototype: HTMLCrossInputTextElement;
        new (): HTMLCrossInputTextElement;
    };
    interface HTMLCrossSelectElement extends Components.CrossSelect, HTMLStencilElement {
    }
    var HTMLCrossSelectElement: {
        prototype: HTMLCrossSelectElement;
        new (): HTMLCrossSelectElement;
    };
    interface HTMLElementTagNameMap {
        "cross-button": HTMLCrossButtonElement;
        "cross-input-text": HTMLCrossInputTextElement;
        "cross-select": HTMLCrossSelectElement;
    }
}
declare namespace LocalJSX {
    interface CrossButton {
        "active"?: boolean;
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
    interface CrossInputText {
        "color"?: string;
        "cols"?: number;
        "disabled"?: boolean;
        "hint"?: string;
        "label"?: string;
        "multiline"?: boolean;
        "placeholder"?: string;
        "required"?: boolean;
        "rows"?: number;
        "size"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface CrossSelect {
        "color"?: string;
        "data"?: any[];
        "disabled"?: boolean;
        "hint"?: string;
        "label"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "cross-button": CrossButton;
        "cross-input-text": CrossInputText;
        "cross-select": CrossSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cross-button": LocalJSX.CrossButton & JSXBase.HTMLAttributes<HTMLCrossButtonElement>;
            "cross-input-text": LocalJSX.CrossInputText & JSXBase.HTMLAttributes<HTMLCrossInputTextElement>;
            "cross-select": LocalJSX.CrossSelect & JSXBase.HTMLAttributes<HTMLCrossSelectElement>;
        }
    }
}
