/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "bootstrap_wkt=true,ts_nocheck=false"
// @generated from file google/protobuf/compiler/plugin.proto (package google.protobuf.compiler, syntax proto2)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "../../../index.js";
import {Message, proto2} from "../../../index.js";
import {FileDescriptorProto, GeneratedCodeInfo} from "../descriptor_pb.js";

/**
 * @generated from message google.protobuf.compiler.Version
 */
export class Version extends Message<Version> {

    /**
     * @generated from field: optional int32 major = 1;
     */
    major?: number;

    /**
     * @generated from field: optional int32 minor = 2;
     */
    minor?: number;

    /**
     * @generated from field: optional int32 patch = 3;
     */
    patch?: number;

    /**
     * @generated from field: optional string suffix = 4;
     */
    suffix?: string;

    constructor(data?: PartialMessage<Version>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "google.protobuf.compiler.Version";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "major", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true},
        {no: 2, name: "minor", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true},
        {no: 3, name: "patch", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true},
        {no: 4, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version {
        return new Version().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version {
        return new Version().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version {
        return new Version().fromJsonString(jsonString, options);
    }

    static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean {
        return proto2.util.equals(Version, a, b);
    }

}


/**
 * @generated from message google.protobuf.compiler.CodeGeneratorRequest
 */
export class CodeGeneratorRequest extends Message<CodeGeneratorRequest> {

    /**
     * @generated from field: repeated string file_to_generate = 1;
     */
    fileToGenerate: string[] = [];

    /**
     * @generated from field: optional string parameter = 2;
     */
    parameter?: string;

    /**
     * @generated from field: repeated google.protobuf.FileDescriptorProto proto_file = 15;
     */
    protoFile: FileDescriptorProto[] = [];

    /**
     * @generated from field: optional google.protobuf.compiler.Version compiler_version = 3;
     */
    compilerVersion?: Version;

    constructor(data?: PartialMessage<CodeGeneratorRequest>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "google.protobuf.compiler.CodeGeneratorRequest";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "file_to_generate", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 2, name: "parameter", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 15, name: "proto_file", kind: "message", T: FileDescriptorProto, repeated: true},
        {no: 3, name: "compiler_version", kind: "message", T: Version, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorRequest {
        return new CodeGeneratorRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorRequest {
        return new CodeGeneratorRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorRequest {
        return new CodeGeneratorRequest().fromJsonString(jsonString, options);
    }

    static equals(a: CodeGeneratorRequest | PlainMessage<CodeGeneratorRequest> | undefined, b: CodeGeneratorRequest | PlainMessage<CodeGeneratorRequest> | undefined): boolean {
        return proto2.util.equals(CodeGeneratorRequest, a, b);
    }

}


/**
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse
 */
export class CodeGeneratorResponse extends Message<CodeGeneratorResponse> {

    /**
     * @generated from field: optional string error = 1;
     */
    error?: string;

    /**
     * @generated from field: optional uint64 supported_features = 2;
     */
    supportedFeatures?: bigint;

    /**
     * @generated from field: repeated google.protobuf.compiler.CodeGeneratorResponse.File file = 15;
     */
    file: CodeGeneratorResponse_File[] = [];

    constructor(data?: PartialMessage<CodeGeneratorResponse>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "google.protobuf.compiler.CodeGeneratorResponse";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 2, name: "supported_features", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true},
        {no: 15, name: "file", kind: "message", T: CodeGeneratorResponse_File, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorResponse {
        return new CodeGeneratorResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorResponse {
        return new CodeGeneratorResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorResponse {
        return new CodeGeneratorResponse().fromJsonString(jsonString, options);
    }

    static equals(a: CodeGeneratorResponse | PlainMessage<CodeGeneratorResponse> | undefined, b: CodeGeneratorResponse | PlainMessage<CodeGeneratorResponse> | undefined): boolean {
        return proto2.util.equals(CodeGeneratorResponse, a, b);
    }

}

/**
 * @generated from enum google.protobuf.compiler.CodeGeneratorResponse.Feature
 */
export enum CodeGeneratorResponse_Feature {

    /**
     * @generated from enum value: FEATURE_NONE = 0;
     */
    NONE = 0,

    /**
     * @generated from enum value: FEATURE_PROTO3_OPTIONAL = 1;
     */
    PROTO3_OPTIONAL = 1,

}

// Retrieve enum metadata with: proto2.getEnumType(CodeGeneratorResponse_Feature)
proto2.util.setEnumType(CodeGeneratorResponse_Feature, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
    {no: 0, name: "FEATURE_NONE"},
    {no: 1, name: "FEATURE_PROTO3_OPTIONAL"},
]);

/**
 * @generated from message google.protobuf.compiler.CodeGeneratorResponse.File
 */
export class CodeGeneratorResponse_File extends Message<CodeGeneratorResponse_File> {

    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;

    /**
     * @generated from field: optional string insertion_point = 2;
     */
    insertionPoint?: string;

    /**
     * @generated from field: optional string content = 15;
     */
    content?: string;

    /**
     * @generated from field: optional google.protobuf.GeneratedCodeInfo generated_code_info = 16;
     */
    generatedCodeInfo?: GeneratedCodeInfo;

    constructor(data?: PartialMessage<CodeGeneratorResponse_File>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 2, name: "insertion_point", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 15, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 16, name: "generated_code_info", kind: "message", T: GeneratedCodeInfo, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGeneratorResponse_File {
        return new CodeGeneratorResponse_File().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGeneratorResponse_File {
        return new CodeGeneratorResponse_File().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGeneratorResponse_File {
        return new CodeGeneratorResponse_File().fromJsonString(jsonString, options);
    }

    static equals(a: CodeGeneratorResponse_File | PlainMessage<CodeGeneratorResponse_File> | undefined, b: CodeGeneratorResponse_File | PlainMessage<CodeGeneratorResponse_File> | undefined): boolean {
        return proto2.util.equals(CodeGeneratorResponse_File, a, b);
    }

}



