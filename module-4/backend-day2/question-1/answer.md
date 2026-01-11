# Explain the following in detail (in your own words):
## 1.Node.js Architecture
**Answer:-** *Node.js architecture explains how Node.js runs JavaScript and handles many tasks at the same time.*
## JavaScript Engine (V8)
**Answer:-**
* V8 is the engine that runs JavaScript code.
* It changes JavaScript into machine-level instructions.
* This makes code run faster.
## Node.js Core APIs
**Answer:-**
* Core APIs are built-in tools provided by Node.js.
* They help with tasks like file reading, server creation, and timers.
* Developers use them without installing anything extra.
## Native bindings
**Answer:-**
* Native bindings connect JavaScript with system-level code.
* They allow backend servers to perform tasks like reading files or handling network requests.
* This helps Node.js interact with the operating system.
## Event Loop
**Answer:-**
* The event loop checks and runs tasks one by one.
* It allows Node.js to handle many requests without stopping.
* This is why Node.js is non-blocking.
## 2.libuv
## What is libuv?
**Answer:-**
* libuv is a library used internally by Node.js.
* It helps manage background tasks.
## Why Node.js needs libuv
**Answer:-**
* JavaScript cannot directly handle system tasks.
* libuv helps Node.js perform async operations easily.
## Responsibilities of libuv
**Answer:-**
* Runs the event loop
* Handles async input and output
* Manages background threads
* Handles timers and network operations
## 3.Thread Pool
## What is a thread pool?
**Answer:-**
* A thread pool is a set of background threads.
* These threads handle slow tasks.
## Why Node.js uses a thread pool
**Answer:-**
* Some operations take time.
* Running them in the thread pool keeps the main thread free.
## Which operations are handled by the thread pool
**Answer:-**
* File reading and writing
* Encryption and decryption
* Compression tasks
* DNS operations
## 4.Worker Threads
## What are worker threads?
**Answer:-**
* Worker threads run JavaScript in separate threads.
* They work parallel to the main thread.
## Why are worker threads needed?
**Answer:-**
* Heavy calculations can slow the app.
* Worker threads handle these tasks separately.
## Difference between thread pool and worker threads
**Answer:-**
* Thread pool is automatic.
* Worker threads are manually created.
* Worker threads are mainly used for CPU-heavy work.
## Event Loop Queues
## Macro Task Queue
**Answer:-**
* Stores tasks that run later.
* Commonly used in JavaScript.
* Examples:
* setTimeout
* setInterval
* API calls from React
## Micro Task Queue
* Runs tasks immediately after current code.
* Examples:
* Promises
* then() callbacks
## Execution priority between them
* Micro tasks run first.
* Macro tasks run after micro tasks finish.
## Examples of tasks in each queue
* Promise resolution → Micro task
* setTimeout callback → Macro task
