/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/generate.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {CodeGeneratorResponse, Message, proto3} from "@bufbuild/protobuf";
import {Image} from "../../image/v1/image_pb.js";

/**
 * @generated from message buf.alpha.registry.v1alpha1.File
 */
export class File extends Message<File> {

    /**
     * @generated from field: string path = 1;
     */
    path = "";

    /**
     * @generated from field: bytes content = 2;
     */
    content = new Uint8Array(0);

    constructor(data?: PartialMessage<File>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.File";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): File {
        return new File().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): File {
        return new File().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): File {
        return new File().fromJsonString(jsonString, options);
    }

    static equals(a: File | PlainMessage<File> | undefined, b: File | PlainMessage<File> | undefined): boolean {
        return proto3.util.equals(File, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.RuntimeLibrary
 */
export class RuntimeLibrary extends Message<RuntimeLibrary> {

    /**
     * @generated from field: string name = 1;
     */
    name = "";

    /**
     * @generated from field: string version = 2;
     */
    version = "";

    constructor(data?: PartialMessage<RuntimeLibrary>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RuntimeLibrary";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RuntimeLibrary {
        return new RuntimeLibrary().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RuntimeLibrary {
        return new RuntimeLibrary().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RuntimeLibrary {
        return new RuntimeLibrary().fromJsonString(jsonString, options);
    }

    static equals(a: RuntimeLibrary | PlainMessage<RuntimeLibrary> | undefined, b: RuntimeLibrary | PlainMessage<RuntimeLibrary> | undefined): boolean {
        return proto3.util.equals(RuntimeLibrary, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.PluginReference
 */
export class PluginReference extends Message<PluginReference> {

    /**
     * @generated from field: string owner = 1;
     */
    owner = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * @generated from field: string version = 3;
     */
    version = "";

    /**
     * @generated from field: repeated string parameters = 4;
     */
    parameters: string[] = [];

    constructor(data?: PartialMessage<PluginReference>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.PluginReference";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "parameters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PluginReference {
        return new PluginReference().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PluginReference {
        return new PluginReference().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PluginReference {
        return new PluginReference().fromJsonString(jsonString, options);
    }

    static equals(a: PluginReference | PlainMessage<PluginReference> | undefined, b: PluginReference | PlainMessage<PluginReference> | undefined): boolean {
        return proto3.util.equals(PluginReference, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GeneratePluginsRequest
 */
export class GeneratePluginsRequest extends Message<GeneratePluginsRequest> {

    /**
     * @generated from field: buf.alpha.image.v1.Image image = 1;
     */
    image?: Image;

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.PluginReference plugins = 2;
     */
    plugins: PluginReference[] = [];

    /**
     * @generated from field: bool include_imports = 3;
     */
    includeImports = false;

    /**
     * @generated from field: bool include_well_known_types = 4;
     */
    includeWellKnownTypes = false;

    constructor(data?: PartialMessage<GeneratePluginsRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GeneratePluginsRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "image", kind: "message", T: Image},
        {no: 2, name: "plugins", kind: "message", T: PluginReference, repeated: true},
        {no: 3, name: "include_imports", kind: "scalar", T: 8 /* ScalarType.BOOL */},
        {no: 4, name: "include_well_known_types", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneratePluginsRequest {
        return new GeneratePluginsRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneratePluginsRequest {
        return new GeneratePluginsRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneratePluginsRequest {
        return new GeneratePluginsRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GeneratePluginsRequest | PlainMessage<GeneratePluginsRequest> | undefined, b: GeneratePluginsRequest | PlainMessage<GeneratePluginsRequest> | undefined): boolean {
        return proto3.util.equals(GeneratePluginsRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GeneratePluginsResponse
 */
export class GeneratePluginsResponse extends Message<GeneratePluginsResponse> {

    /**
     * @generated from field: repeated google.protobuf.compiler.CodeGeneratorResponse responses = 1;
     */
    responses: CodeGeneratorResponse[] = [];

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RuntimeLibrary runtime_libraries = 2;
     */
    runtimeLibraries: RuntimeLibrary[] = [];

    constructor(data?: PartialMessage<GeneratePluginsResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GeneratePluginsResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "responses", kind: "message", T: CodeGeneratorResponse, repeated: true},
        {no: 2, name: "runtime_libraries", kind: "message", T: RuntimeLibrary, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneratePluginsResponse {
        return new GeneratePluginsResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneratePluginsResponse {
        return new GeneratePluginsResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneratePluginsResponse {
        return new GeneratePluginsResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GeneratePluginsResponse | PlainMessage<GeneratePluginsResponse> | undefined, b: GeneratePluginsResponse | PlainMessage<GeneratePluginsResponse> | undefined): boolean {
        return proto3.util.equals(GeneratePluginsResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GenerateTemplateRequest
 */
export class GenerateTemplateRequest extends Message<GenerateTemplateRequest> {

    /**
     * @generated from field: buf.alpha.image.v1.Image image = 1;
     */
    image?: Image;

    /**
     * @generated from field: string template_owner = 2;
     */
    templateOwner = "";

    /**
     * @generated from field: string template_name = 3;
     */
    templateName = "";

    /**
     * @generated from field: string template_version = 4;
     */
    templateVersion = "";

    /**
     * @generated from field: bool include_imports = 5;
     */
    includeImports = false;

    /**
     * @generated from field: bool include_well_known_types = 6;
     */
    includeWellKnownTypes = false;

    constructor(data?: PartialMessage<GenerateTemplateRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GenerateTemplateRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "image", kind: "message", T: Image},
        {no: 2, name: "template_owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "template_name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "template_version", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 5, name: "include_imports", kind: "scalar", T: 8 /* ScalarType.BOOL */},
        {no: 6, name: "include_well_known_types", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateTemplateRequest {
        return new GenerateTemplateRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateTemplateRequest {
        return new GenerateTemplateRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateTemplateRequest {
        return new GenerateTemplateRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GenerateTemplateRequest | PlainMessage<GenerateTemplateRequest> | undefined, b: GenerateTemplateRequest | PlainMessage<GenerateTemplateRequest> | undefined): boolean {
        return proto3.util.equals(GenerateTemplateRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GenerateTemplateResponse
 */
export class GenerateTemplateResponse extends Message<GenerateTemplateResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.File files = 1;
     */
    files: File[] = [];

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RuntimeLibrary runtime_libraries = 2;
     */
    runtimeLibraries: RuntimeLibrary[] = [];

    constructor(data?: PartialMessage<GenerateTemplateResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GenerateTemplateResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "files", kind: "message", T: File, repeated: true},
        {no: 2, name: "runtime_libraries", kind: "message", T: RuntimeLibrary, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateTemplateResponse {
        return new GenerateTemplateResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateTemplateResponse {
        return new GenerateTemplateResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateTemplateResponse {
        return new GenerateTemplateResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GenerateTemplateResponse | PlainMessage<GenerateTemplateResponse> | undefined, b: GenerateTemplateResponse | PlainMessage<GenerateTemplateResponse> | undefined): boolean {
        return proto3.util.equals(GenerateTemplateResponse, a, b);
    }

}



