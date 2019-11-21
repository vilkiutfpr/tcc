import { Task } from './task';
export declare class Counters {
    high: number;
    medium: number;
    low: number;
}
export declare class TaskPayload {
    items: Task[];
    counters: Counters;
}
