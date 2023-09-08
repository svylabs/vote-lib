declare namespace wasm_bindgen {
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
	* @returns {any}
	*/
	export function vote_multi(choices: Uint32Array, num_choices: number, poll_pubkey: string): any;
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly vote_single: (a: number, b: number, c: number, d: number) => number;
  readonly vote_multi: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
