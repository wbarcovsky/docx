/// <reference types="node" />
import { IDrawingOptions } from "../drawing";
import { File } from "../file";
import { IMediaData } from "./data";
import { Image } from "./image";
export declare class Media {
    static addImage(file: File, buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number, drawingOptions?: IDrawingOptions): Image;
    private static generateId();
    private readonly map;
    constructor();
    getMedia(key: string): IMediaData;
    addMedia(buffer: Buffer | string | Uint8Array | ArrayBuffer, referenceId: number, width?: number, height?: number): IMediaData;
    private createMedia(key, relationshipsCount, dimensions, data, filePath?);
    readonly Array: IMediaData[];
    private convertDataURIToBinary(dataURI);
}
