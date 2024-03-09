# Url parser

A simple script that parser an url like `/6/api/listings/3?sort=desc&limit=10` to:

```json
{ "version": 6, "collection": "listings", "id": 3, "sort": "desc", "limit": 10 }
```

## Set up

First clone the project then install

```
npm install
```

## Tests

```
npm test
```
