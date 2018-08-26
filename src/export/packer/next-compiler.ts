import * as JSZip from "jszip";
import * as xml from "xml";

import { File } from "file";
import { Formatter } from "../formatter";

interface IXmlifyedFile {
    data: string;
    path: string;
}

interface IXmlifyedFileMapping {
    Document: IXmlifyedFile;
    Styles: IXmlifyedFile;
    Properties: IXmlifyedFile;
    Numbering: IXmlifyedFile;
    Relationships: IXmlifyedFile;
    FileRelationships: IXmlifyedFile;
    Headers: IXmlifyedFile[];
    Footers: IXmlifyedFile[];
    HeaderRelationships: IXmlifyedFile[];
    FooterRelationships: IXmlifyedFile[];
    ContentTypes: IXmlifyedFile;
    AppProperties: IXmlifyedFile;
    FootNotes: IXmlifyedFile;
}

export class Compiler {
    private readonly formatter: Formatter;

    constructor() {
        this.formatter = new Formatter();
    }

    public async compile(file: File): Promise<JSZip> {
        const zip = new JSZip();

        const xmlifiedFileMapping = this.xmlifyFile(file);

        for (const key in xmlifiedFileMapping) {
            if (!xmlifiedFileMapping[key]) {
                continue;
            }

            const obj = xmlifiedFileMapping[key] as IXmlifyedFile | IXmlifyedFile[];

            if (Array.isArray(obj)) {
                for (const subFile of obj) {
                    zip.file(subFile.path, subFile.data);
                }
            } else {
                zip.file(obj.path, obj.data);
            }
        }

        for (const data of file.Media.Array) {
            const mediaData = data.stream;
            zip.file(`word/media/${data.fileName}`, mediaData);
        }

        return zip;
    }

    private xmlifyFile(file: File): IXmlifyedFileMapping {
        return {
            Document: {
                data: xml(this.formatter.format(file.Document), true),
                path: "word/document.xml",
            },
            Styles: {
                data: xml(this.formatter.format(file.Styles)),
                path: "word/styles.xml",
            },
            Properties: {
                data: xml(this.formatter.format(file.CoreProperties), {
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "docProps/core.xml",
            },
            Numbering: {
                data: xml(this.formatter.format(file.Numbering)),
                path: "word/numbering.xml",
            },
            Relationships: {
                data: xml(this.formatter.format(file.DocumentRelationships)),
                path: "word/_rels/document.xml.rels",
            },
            FileRelationships: {
                data: xml(this.formatter.format(file.FileRelationships)),
                path: "_rels/.rels",
            },
            Headers: file.Headers.map((headerWrapper, index) => ({
                data: xml(this.formatter.format(headerWrapper.Header)),
                path: `word/header${index + 1}.xml`,
            })),
            Footers: file.Footers.map((footerWrapper, index) => ({
                data: xml(this.formatter.format(footerWrapper.Footer)),
                path: `word/footer${index + 1}.xml`,
            })),
            HeaderRelationships: file.Headers.map((headerWrapper, index) => ({
                data: xml(this.formatter.format(headerWrapper.Relationships)),
                path: `word/_rels/header${index + 1}.xml.rels`,
            })),
            FooterRelationships: file.Footers.map((footerWrapper, index) => ({
                data: xml(this.formatter.format(footerWrapper.Relationships)),
                path: `word/_rels/footer${index + 1}.xml.rels`,
            })),
            ContentTypes: {
                data: xml(this.formatter.format(file.ContentTypes)),
                path: "[Content_Types].xml",
            },
            AppProperties: {
                data: xml(this.formatter.format(file.AppProperties)),
                path: "docProps/app.xml",
            },
            FootNotes: {
                data: xml(this.formatter.format(file.FootNotes)),
                path: "word/footnotes.xml",
            },
        };
    }
}
