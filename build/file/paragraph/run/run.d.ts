import { RunProperties } from "./properties";
import { XmlComponent } from "../../../file/xml-components";
export declare class Run extends XmlComponent {
    protected properties: RunProperties;
    constructor();
    bold(): Run;
    italic(): Run;
    underline(underlineType?: string, color?: string): Run;
    color(color: string): Run;
    size(size: number): Run;
    rightToLeft(): Run;
    break(): Run;
    tab(): Run;
    pageNumber(): Run;
    smallCaps(): Run;
    allCaps(): Run;
    strike(): Run;
    doubleStrike(): Run;
    subScript(): Run;
    superScript(): Run;
    font(fontName: string, hint?: string | undefined): Run;
    style(styleId: string): Run;
}
