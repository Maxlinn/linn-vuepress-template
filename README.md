# This is README.md

Quickly setup a simple site to store markdown notes, and share them via static website.

## Usage

- Uses this template to create a repo.
- Modify `.vuepress/config.js`, guided by comments inside.
- (Optional) Modify `.github/workflows/vuepress-deploy.yml` to suit your deployment.
- Commit and push once.
  - Once ok, a branch named `gh-pages` will be created.

- Turn on `github pages` inside settings.
  - Set the branch to `gh-pages`, where the static web files are located.

- Begin to write your markdown files!
  - Just uses the root directory `/` as your document vault base.
  - Every time your push, the static site will be auto generated and deployed, may take time to effect due to github.
  - Remember, this `README.md` will appear as `index.html` afterwards, so don't hesitate to replace it with your own!




## Todo

- [ ] Auto generate sidebar by directory.
- [ ] Add dark mode.
- [ ] Add back to top.
- [ ] Add `.gitignore`
- [ ] Add instructions to install vuepress.
- [ ] Add full-text searching.
