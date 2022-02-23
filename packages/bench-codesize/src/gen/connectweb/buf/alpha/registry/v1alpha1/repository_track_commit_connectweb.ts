/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/repository_track_commit.proto (package buf.alpha.registry.v1alpha1, syntax proto3)

import {MethodKind, proto3} from "@bufbuild/protobuf";
import {GetRepositoryTrackCommitByReferenceRequest, GetRepositoryTrackCommitByReferenceResponse, GetRepositoryTrackCommitByRepositoryCommitRequest, GetRepositoryTrackCommitByRepositoryCommitResponse, ListRepositoryTrackCommitsByRepositoryTrackRequest, ListRepositoryTrackCommitsByRepositoryTrackResponse} from "./repository_track_commit_pb.js";

// ## Service RepositoryTrackCommitService
// Generated from service buf.alpha.registry.v1alpha1.RepositoryTrackCommitService
export const RepositoryTrackCommitService = proto3.makeServiceType({
    typeName: "buf.alpha.registry.v1alpha1.RepositoryTrackCommitService",
    methods: {
        getRepositoryTrackCommitByRepositoryCommit: {
            name: "GetRepositoryTrackCommitByRepositoryCommit",
            I: GetRepositoryTrackCommitByRepositoryCommitRequest,
            O: GetRepositoryTrackCommitByRepositoryCommitResponse,
            kind: MethodKind.Unary,
        },
        listRepositoryTrackCommitsByRepositoryTrack: {
            name: "ListRepositoryTrackCommitsByRepositoryTrack",
            I: ListRepositoryTrackCommitsByRepositoryTrackRequest,
            O: ListRepositoryTrackCommitsByRepositoryTrackResponse,
            kind: MethodKind.Unary,
        },
        getRepositoryTrackCommitByReference: {
            name: "GetRepositoryTrackCommitByReference",
            I: GetRepositoryTrackCommitByReferenceRequest,
            O: GetRepositoryTrackCommitByReferenceResponse,
            kind: MethodKind.Unary,
        },
    }
});

