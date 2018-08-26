// http://officeopenxml.com/WPindentation.php
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export interface IIndentAttributesProperties {
    left?: number;
    hanging?: number;
    firstLine?: number;
    start?: number;
    end?: number;
}

class IndentAttributes extends XmlAttributeComponent<IIndentAttributesProperties> {
    protected xmlKeys = {
        left: "w:left",
        hanging: "w:hanging",
        firstLine: "w:firstLine",
        start: "w:start",
        end: "w:end",
    };
}

export class Indent extends XmlComponent {
    constructor(attrs: IIndentAttributesProperties) {
        super("w:ind");
        this.root.push(new IndentAttributes(attrs));
    }
}
