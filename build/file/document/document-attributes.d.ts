import { XmlAttributeComponent } from "../../file/xml-components";
export interface IDocumentAttributesProperties {
    wpc?: string;
    mc?: string;
    o?: string;
    r?: string;
    m?: string;
    v?: string;
    wp14?: string;
    wp?: string;
    w10?: string;
    w?: string;
    w14?: string;
    w15?: string;
    wpg?: string;
    wpi?: string;
    wne?: string;
    wps?: string;
    Ignorable?: string;
    cp?: string;
    dc?: string;
    dcterms?: string;
    dcmitype?: string;
    xsi?: string;
    type?: string;
}
export declare class DocumentAttributes extends XmlAttributeComponent<IDocumentAttributesProperties> {
    protected xmlKeys: {
        wpc: string;
        mc: string;
        o: string;
        r: string;
        m: string;
        v: string;
        wp14: string;
        wp: string;
        w10: string;
        w: string;
        w14: string;
        w15: string;
        wpg: string;
        wpi: string;
        wne: string;
        wps: string;
        Ignorable: string;
        cp: string;
        dc: string;
        dcterms: string;
        dcmitype: string;
        xsi: string;
        type: string;
    };
}
