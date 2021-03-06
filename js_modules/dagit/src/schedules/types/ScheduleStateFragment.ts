// @generated
/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ScheduleTickStatus, PipelineRunStatus, ScheduleStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ScheduleStateFragment
// ====================================================

export interface ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin_codePointer_metadata {
  __typename: "CodePointerMetadata";
  key: string;
  value: string;
}

export interface ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin_codePointer {
  __typename: "CodePointer";
  metadata: ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin_codePointer_metadata[];
}

export interface ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin {
  __typename: "PythonRepositoryOrigin";
  codePointer: ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin_codePointer;
  executablePath: string;
}

export interface ScheduleStateFragment_repositoryOrigin_GrpcRepositoryOrigin {
  __typename: "GrpcRepositoryOrigin";
  grpcUrl: string;
}

export type ScheduleStateFragment_repositoryOrigin = ScheduleStateFragment_repositoryOrigin_PythonRepositoryOrigin | ScheduleStateFragment_repositoryOrigin_GrpcRepositoryOrigin;

export interface ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickSuccessData_run {
  __typename: "PipelineRun";
  pipelineName: string;
  status: PipelineRunStatus;
  runId: string;
}

export interface ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickSuccessData {
  __typename: "ScheduleTickSuccessData";
  run: ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickSuccessData_run | null;
}

export interface ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData_error_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData_error_cause | null;
}

export interface ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData {
  __typename: "ScheduleTickFailureData";
  error: ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData_error;
}

export type ScheduleStateFragment_ticks_tickSpecificData = ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickSuccessData | ScheduleStateFragment_ticks_tickSpecificData_ScheduleTickFailureData;

export interface ScheduleStateFragment_ticks {
  __typename: "ScheduleTick";
  tickId: string;
  status: ScheduleTickStatus;
  timestamp: number;
  tickSpecificData: ScheduleStateFragment_ticks_tickSpecificData | null;
}

export interface ScheduleStateFragment_runs_tags {
  __typename: "PipelineTag";
  key: string;
  value: string;
}

export interface ScheduleStateFragment_runs {
  __typename: "PipelineRun";
  runId: string;
  tags: ScheduleStateFragment_runs_tags[];
  pipelineName: string;
  status: PipelineRunStatus;
}

export interface ScheduleStateFragment {
  __typename: "ScheduleState";
  id: string;
  scheduleOriginId: string;
  repositoryOrigin: ScheduleStateFragment_repositoryOrigin;
  repositoryOriginId: string;
  scheduleName: string;
  cronSchedule: string;
  runningScheduleCount: number;
  ticks: ScheduleStateFragment_ticks[];
  runsCount: number;
  runs: ScheduleStateFragment_runs[];
  ticksCount: number;
  status: ScheduleStatus;
}
