/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/token.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import {MethodKind, proto3} from "@bufbuild/protobuf";
import {CreateTokenRequest, CreateTokenResponse, DeleteTokenRequest, DeleteTokenResponse, GetTokenRequest, GetTokenResponse, ListTokensRequest, ListTokensResponse} from "./token_pb.js";

// ## Service TokenService
// Generated from service buf.alpha.registry.v1alpha1.TokenService
export const TokenService = proto3.makeServiceType({
    typeName: "buf.alpha.registry.v1alpha1.TokenService",
    methods: {
        createToken: {
            name: "CreateToken",
            I: CreateTokenRequest,
            O: CreateTokenResponse,
            kind: MethodKind.Unary,
        },
        getToken: {
            name: "GetToken",
            I: GetTokenRequest,
            O: GetTokenResponse,
            kind: MethodKind.Unary,
        },
        listTokens: {
            name: "ListTokens",
            I: ListTokensRequest,
            O: ListTokensResponse,
            kind: MethodKind.Unary,
        },
        deleteToken: {
            name: "DeleteToken",
            I: DeleteTokenRequest,
            O: DeleteTokenResponse,
            kind: MethodKind.Unary,
        },
    }
});

