import { QueryResultRow } from "pg";

export interface database<T = QueryResultRow> {
    status: boolean,
    data: T[],
    error?: Error
}