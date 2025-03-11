# Run the app
`yarn dev`

# Run Storybook
`yarn storybook`

# `storybook build` problem
You can try serve the `./storybook-static` directory, e.g., like so:

`npx http-server -c-1 ./storybook-static`

You will see what my `storybook build --force-build-preview` command has built for me after I removed some files.