import { Hono } from "hono";
import type { Env } from './core-utils';
import { ok } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // Unused boilerplate routes removed. This application uses client-side mock data.
}