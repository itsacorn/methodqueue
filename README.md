# MethodQueue

MethodQueue is a simple queueing system for methods for Javascript.

[![NPM](https://nodei.co/npm/methodqueue.png)](https://nodei.co/npm/methodqueue/)

## Basic Usage

Install MethodQueue using NPM:
```
npm i methodqueue --save
```
Once installed, you can import it into your application using: 
```js
const Queue = require("methodqueue")
```
Or if you use Typescript/Webpack: 
```ts
import Queue from "methodqueue"
```
There it is! Now, create a new method queue with: 
```js
let queue = new Queue([...methods])
```

### Properties
Dont modify these properties, you could break stuff.
#### `._queuedMethods`
An Array containg all queued methods.
```js
queue._queuedMethods
```

#### `._processedMethods`
The current method index.
```js
queue._processedMethods
```

### Methods
#### `.next(...args)`
Call next function with provided arguments.
```js
queue.next({message: "Goodbye"})
```

#### `.prev(...args)`
Call previous function with provided arguments.
```js
queue.prev({message: "Hello"})
```

#### `.jump(index, ...args)`
Call specified function with provided arguments.
```js
queue.jump(1, {message: "Jumpin' back 'n forth."})
```

#### `.add(methods)`
Add methods to queue.
```js
queue.add([a => "hello" + a, b => b + "goodbye"])
```