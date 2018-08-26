import { IMediaData } from "file/media";
import { XmlComponent } from "file/xml-components";
import { Anchor } from "./anchor";
import { IFloating } from "./floating";
import { Inline } from "./inline";
import { ITextWrapping } from "./text-wrap";

export enum PlacementPosition {
    INLINE,
    FLOATING,
}

export interface IDistance {
    distT?: number;
    distB?: number;
    distL?: number;
    distR?: number;
}

export interface IDrawingOptions {
    position?: PlacementPosition;
    textWrapping?: ITextWrapping;
    floating?: IFloating;
}

const defaultDrawingOptions: IDrawingOptions = {
    position: PlacementPosition.INLINE,
};

export class Drawing extends XmlComponent {
    private readonly inline: Inline;

    constructor(imageData: IMediaData, drawingOptions?: IDrawingOptions) {
        super("w:drawing");

        if (imageData === undefined) {
            throw new Error("imageData cannot be undefined");
        }

        const mergedOptions = {
            ...defaultDrawingOptions,
            ...drawingOptions,
        };

        if (mergedOptions.position === PlacementPosition.INLINE) {
            this.inline = new Inline(imageData.referenceId, imageData.dimensions);
            this.root.push(this.inline);
        } else if (mergedOptions.position === PlacementPosition.FLOATING) {
            this.root.push(new Anchor(imageData.referenceId, imageData.dimensions, mergedOptions));
        }
    }

    public scale(factorX: number, factorY: number): void {
        this.inline.scale(factorX, factorY);
    }
}
