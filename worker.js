// worker.js
importScripts('poll_lib_wasm.js')

// In the worker, we have a different struct that we want to use as in
// `index.js`.
const {vote_single} = wasm_bindgen;
//console.newLog(vote_single);

async function init_wasm_in_worker() {
    // Load the wasm file by awaiting the Promise returned by `wasm_bindgen`.
    await wasm_bindgen('poll_lib_wasm_bg.wasm');

    // Create a new object of the `NumberEval` struct.
    // Set callback to handle messages passed to the worker.
    self.onmessage = async event => {
        // By using methods of a struct as reaction to messages passed to the
        // worker, we can preserve our state between messages.
        const worker_result = vote_single(1, 5, "MC6xp3UbtRrh9Chf_9JsjbmzUqjyvPz3EIoq82YMVTo");

        // Send response back to be handled by callback in main thread.
        self.postMessage(worker_result);
    };

    self.addEventListener('error', function(event) {
        self.postMessage("Error");
    });
};
//importScripts('assets/poll_lib_wasm.js')
init_wasm_in_worker();