# Ignite Timer

## Styled-Components

> `npm i styled-components`

> `npm i @types/styled-components -D`

<hr/><br/>

## ESLint

> `npm i eslint -D`

> `npm i @rocketseat/eslint-config -D`

> `npx eslint --init`

    [Esc] para fazer minha própria configuração.

1. Teste ESLint

* add no setting.json:

```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
```

> `npx eslint src --ext .ts,.tsx`

All
> `npx eslint src --ext .ts,.tsx --fix`

* Criar no "script", no package.json:

```json
    "scripts": {
        "lint": "eslint src --ext .ts,.tsx,"
    },
```

> `npm run lint`

All
> `npm run lint --fix`

<hr/><br/>

