// worker.js
importScripts('poll_lib_wasm.js')

// In the worker, we have a different struct that we want to use as in
// `index.js`.
const {vote_single, vote_multi} = wasm_bindgen;
//console.newLog(vote_single);

async function init_wasm_in_worker() {
    // Load the wasm file by awaiting the Promise returned by `wasm_bindgen`.
    await wasm_bindgen('poll_lib_wasm_bg.wasm');

    // Create a new object of the `NumberEval` struct.
    // Set callback to handle messages passed to the worker.
    self.onmessage = async event => {
        let input = {};
        try {
           input = JSON.parse(event.data);
        } catch (e) {
            input = event.data;
        }

        // By using methods of a struct as reaction to messages passed to the
        // worker, we can preserve our state between messages.
        const num_choices = input.num_choices;
        const choices = input.choices;
        const poll_pub_key = input.poll_pub_key;
        const platform = input.platform;
        if (choices.length == 1) {
            const result = vote_single(choices[0], num_choices, poll_pub_key);
            self.postMessage(JSON.stringify({poll_id: input.poll_id, num_choices, choices, poll_pub_key, result, platform}));
        } else {
            const result = vote_multi(choices, num_choices, poll_pub_key);
            self.postMessage(JSON.stringify({poll_id: input.poll_id, num_choices, choices, poll_pub_key, result, platform}));
        }

        // Send response back to be handled by callback in main thread.
        
    };

    self.addEventListener('error', function(event) {
        self.postMessage("Error");
    });
};
//importScripts('assets/poll_lib_wasm.js')
init_wasm_in_worker();