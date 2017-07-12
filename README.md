# Promisify Seneca

Promisify some useful Seneca apis.

## Installation

Add this package:

```
npm i -S promisify-seneca
```

Use it as a seneca plugin:

```
seneca()
  .use('promisify-seneca')
  .use(...)
  .add(...)
  ....
```

## Usage

#### addAsync

Add an async function as handler.

```
seneca.addAsync({role: 'math', cmd: 'add'}, async (msg) => {
  const sum = await Promise.resolve(msg.a + msg.b)
  return {data: sum}
})
```

#### actAsync

Act and return a promise.

```
seneca.actAsync({role: 'math', cmd: 'add', a:1, b:2})
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

## License

MIT