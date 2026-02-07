/**
 * Application Configuration
 *
 * Centralized configuration for the application.
 */

// =============================================================================
// API Configuration
// =============================================================================

/**
 * API port configuration
 * - Development: 2026 (run `pnpm dev:api` separately)
 * - Production: 2620 (bundled sidecar)
 */
export const API_PORT = import.meta.env.PROD ? 2620 : 2026;

/**
 * API base URL
 * In development, use empty string to leverage Vite proxy
 * In production, use localhost with specific port
 */
export const API_BASE_URL = import.meta.env.PROD ? `http://localhost:${API_PORT}` : '';

// =============================================================================
// App Configuration
// =============================================================================

/**
 * App name
 */
export const APP_NAME = 'WorkAny';

/**
 * App identifier (must match tauri.conf.json)
 */
export const APP_IDENTIFIER = 'ai.thinkany.workany';
