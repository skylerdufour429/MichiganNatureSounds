# Michigan Nature Sounds

A simple static web app example for Michigan wildlife education, designed to run as a GitHub Pages site and in GitHub Codespaces.

## App overview

- App name: Michigan Nature Sounds
- Bundle ID: com.yourcompany.MichiganNatureSounds
- Version: 1.0
- Platform: iOS web-wrapper example
- Minimum OS: 3.0
- Archive note: This project is a browser-based demo rather than a native IPA package.

## Included features

- Wildlife cards for Michigan mammals, birds, and insects
- Scientific names and habitat facts
- Educational descriptions
- Interactive category filters
- Theme toggle for light/dark display
- Sound button placeholder for future audio assets

## Project files

- [index.html](index.html)
- [styles.css](styles.css)
- [script.js](script.js)
- [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json)
- [.github/workflows/pages.yml](.github/workflows/pages.yml)

## Run locally

1. Open the folder in VS Code.
2. Start a local web server from the project root:
   python3 -m http.server 8000
3. Visit http://localhost:8000/

## GitHub Pages deployment

1. Push this repository to GitHub.
2. Open Settings → Pages.
3. Set the source to GitHub Actions.
4. The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) will deploy the site automatically.

## GitHub Codespaces

This repository includes a dev container configuration in [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json). Open the repo in Codespaces and the app can be served locally through the forwarded port.

## Notes

This is a front-end example for a wildlife app concept and is intentionally lightweight so it works well as a static GitHub Pages project.
