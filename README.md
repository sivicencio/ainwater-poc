# AInwater proof of concept (POC)

This repository includes a small proof of concept for a water plant diagram (inspired in SCADA diagrams), where the user can have a general overview of a water plant operation. The diagram is also clickable on specific regions, in which case the user is redirected to another page.
## Current status

Right now a static diagram can be visualized, and only two regions of it are clickable:
- Reactor 1
- Descarga

After clicking on either region, a different page (URL) is displayed, showing only the title of a future stage in the context of the plant operation.

There is a demo [available here](https://sweet-profiterole-4e02a3.netlify.app/).

## Technology stack

- React 18 using [Create React App](https://create-react-app.dev/)
- React Router 6
- Node 16 (for development only)
- Yarn 1.22.17

## Development setup

First clone the repository and cd into it.

```bash
cd ainwater-poc
```

If you're using [nvm]() to manage different Node versions, you can switch to the project version (16) with:

```bash
nvm use
```

Install the application dependencies.

```bash
yarn install
```

Finally run the application.

```bash
yarn start
```

And then open [http://localhost:3000](http://localhost:3000) to view it in your browser.
