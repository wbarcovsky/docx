/// <reference types="node" />
export interface IMediaDataDimensions {
    pixels: {
        x: number;
        y: number;
    };
    emus: {
        x: number;
        y: number;
    };
}
export interface IMediaData {
    referenceId: number;
    stream: Buffer | Uint8Array | ArrayBuffer;
    path?: string;
    fileName: string;
    dimensions: IMediaDataDimensions;
}
export declare const WORKAROUND2 = "";
