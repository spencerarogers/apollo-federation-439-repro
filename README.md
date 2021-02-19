# https://github.com/apollographql/federation/issues/439

## Summary

The service list configuration has an entry with a valid `url` property but is lacking a `name` property.

In [gateway-server.js](https://github.com/spencerarogers/apollo-federation-439-repro/blob/3b47015b063e04025f73c21818d91063d4c83525/gateway-server.js#L4):

```js
const gateway = new ApolloGateway({
  // NOTE: Here the we have a service with a valid URL but a missing "name" property.
  serviceList: [{"service":"should-be-name", "url":"http://localhost:4001/graphql"}]
});
```

## Reproduction

1. `yarn install`
2. `node implementing-server.js`
3. `node gateway-server.js`
4. `bin/curl`
