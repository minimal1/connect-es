/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/owner.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import {MethodKind, proto3} from "@bufbuild/protobuf";
import {GetOwnerByNameRequest, GetOwnerByNameResponse} from "./owner_pb.js";

// ## Service OwnerService
// Generated from service buf.alpha.registry.v1alpha1.OwnerService
export const OwnerService = proto3.makeServiceType({
    typeName: "buf.alpha.registry.v1alpha1.OwnerService",
    methods: {
        getOwnerByName: {
            name: "GetOwnerByName",
            I: GetOwnerByNameRequest,
            O: GetOwnerByNameResponse,
            kind: MethodKind.Unary,
        },
    }
});

