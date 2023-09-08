/* tslint:disable */
/* eslint-disable */
/**
* @param {number} choice
* @param {number} num_choices
* @param {string} poll_pubkey
* @returns {any}
*/
export function vote_single(choice: number, num_choices: number, poll_pubkey: string): any;
/**
* @param {Uint32Array} choices
* @param {number} num_choices
* @param {string} poll_pubkey
*/
export function vote_multi(choices: Uint32Array, num_choices: number, poll_pubkey: string): void;
/**
* @param {string} name
*/
export function greet(name: string): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly vote_single: (a: number, b: number, c: number, d: number) => number;
  readonly vote_multi: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly greet: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
