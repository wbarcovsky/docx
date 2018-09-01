import { XmlComponent } from "../../file/xml-components";
import { WidthType } from "./table-cell";
import { TableCellMargin } from "./table-cell-margin";
export declare class TableProperties extends XmlComponent {
    private readonly cellMargain;
    constructor();
    setWidth(type: WidthType, w: number | string): TableProperties;
    setFixedWidthLayout(): TableProperties;
    setBorder(): TableProperties;
    readonly CellMargin: TableCellMargin;
}
