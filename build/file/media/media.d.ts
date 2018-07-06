/// <reference types="node" />
import { IMediaData } from "./data";
export declare class Media {
    private readonly map;
    constructor();
    getMedia(key: string): IMediaData;
    addMedia(filePath: string, referenceId: number): IMediaData;
    addMediaWithData(fileName: string, data: Buffer, referenceId: number, width?: number, height?: number): IMediaData;
    private createMedia(key, relationshipsCount, dimensions, data, filePath?);
    readonly array: IMediaData[];
}
