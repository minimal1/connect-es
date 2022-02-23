/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/image.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {Image} from "../../image/v1/image_pb.js";

/**
 * @generated from enum buf.alpha.registry.v1alpha1.ImageMask
 */
export enum ImageMask {

    /**
     * @generated from enum value: IMAGE_MASK_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,

    /**
     * @generated from enum value: IMAGE_MASK_MESSAGES = 1;
     */
    MESSAGES = 1,

    /**
     * @generated from enum value: IMAGE_MASK_ENUMS = 2;
     */
    ENUMS = 2,

    /**
     * @generated from enum value: IMAGE_MASK_SERVICES = 3;
     */
    SERVICES = 3,

}

// Retrieve enum metadata with: proto3.getEnumType(ImageMask)
proto3.util.setEnumType(ImageMask, "buf.alpha.registry.v1alpha1.ImageMask", [
    {no: 0, name: "IMAGE_MASK_UNSPECIFIED"},
    {no: 1, name: "IMAGE_MASK_MESSAGES"},
    {no: 2, name: "IMAGE_MASK_ENUMS"},
    {no: 3, name: "IMAGE_MASK_SERVICES"},
]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetImageRequest
 */
export class GetImageRequest extends Message<GetImageRequest> {

    /**
     * @generated from field: string owner = 1;
     */
    owner = "";

    /**
     * @generated from field: string repository = 2;
     */
    repository = "";

    /**
     * @generated from field: string reference = 3;
     */
    reference = "";

    /**
     * @generated from field: bool exclude_imports = 4;
     */
    excludeImports = false;

    /**
     * @generated from field: bool exclude_source_info = 5;
     */
    excludeSourceInfo = false;

    /**
     * @generated from field: repeated string types = 6;
     */
    types: string[] = [];

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.ImageMask include_mask = 7;
     */
    includeMask: ImageMask[] = [];

    constructor(data?: PartialMessage<GetImageRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetImageRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "exclude_imports", kind: "scalar", T: 8 /* ScalarType.BOOL */},
        {no: 5, name: "exclude_source_info", kind: "scalar", T: 8 /* ScalarType.BOOL */},
        {no: 6, name: "types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 7, name: "include_mask", kind: "enum", T: proto3.getEnumType(ImageMask), repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetImageRequest {
        return new GetImageRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetImageRequest {
        return new GetImageRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetImageRequest {
        return new GetImageRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GetImageRequest | PlainMessage<GetImageRequest> | undefined, b: GetImageRequest | PlainMessage<GetImageRequest> | undefined): boolean {
        return proto3.util.equals(GetImageRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetImageResponse
 */
export class GetImageResponse extends Message<GetImageResponse> {

    /**
     * @generated from field: buf.alpha.image.v1.Image image = 1;
     */
    image?: Image;

    constructor(data?: PartialMessage<GetImageResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetImageResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "image", kind: "message", T: Image},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetImageResponse {
        return new GetImageResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetImageResponse {
        return new GetImageResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetImageResponse {
        return new GetImageResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GetImageResponse | PlainMessage<GetImageResponse> | undefined, b: GetImageResponse | PlainMessage<GetImageResponse> | undefined): boolean {
        return proto3.util.equals(GetImageResponse, a, b);
    }

}



