/* tslint:disable */
/* eslint-disable */
export function gen_circuit_params_wasm(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function gen_pk_wasm(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function gen_vk_wasm(a: number, b: number, c: number, d: number, e: number): void;
export function verify_wasm(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function prove_wasm(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): void;
export function init_panic_hook(): void;
export function __wbg_wbg_rayon_poolbuilder_free(a: number): void;
export function wbg_rayon_poolbuilder_numThreads(a: number): number;
export function wbg_rayon_poolbuilder_receiver(a: number): number;
export function wbg_rayon_poolbuilder_build(a: number): void;
export function wbg_rayon_start_worker(a: number): void;
export function initThreadPool(a: number): number;
export function rustsecp256k1_v0_6_1_context_create(a: number): number;
export function rustsecp256k1_v0_6_1_context_destroy(a: number): void;
export function rustsecp256k1_v0_6_1_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_6_1_default_error_callback_fn(a: number, b: number): void;
export const memory: WebAssembly.Memory;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_thread_destroy(a: number, b: number): void;
export function __wbindgen_start(): void;
