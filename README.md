# Velocinder Labs website

A responsive browser website with working installer and portable downloads,
checksum dialogs, release notes, privacy information, and license notices.
There are no accounts, analytics, contact forms, fake email addresses, or external
frontend libraries. The original browser source is excluded from public downloads.

## Local preview

Requires Node.js 22 or newer. No npm dependencies are required.

```powershell
npm run build
npm start
```

Open http://127.0.0.1:4173. The complete website ZIP includes actual release files
in `public/downloads`, so local downloads work immediately. The smaller Render
source ZIP omits binaries and requires `RELEASE_BASE_URL` for its build.

## Render deployment

The supplied `render.yaml` configures a **Render Static Site**, with build command
`node build.cjs` and publish directory `dist`. This website does not need a paid
Node web service. Render plan terms and bandwidth usage apply to deployment.

1. Put the small website source in a Git repository. `.gitignore` excludes
   `public/downloads`, `dist`, `.env`, and dependencies. Do not commit the browser
   source or browser binaries to this repository.
2. Upload these two files to a public release-file host, such as GitHub Releases:
   `Velocinder-Setup-1.0.0-x64.exe` and `Velocinder-Windows.zip`. Their hashes and
   sizes are already recorded in `public/release.json` and `public/checksums.txt`.
3. In Render, create a Blueprint from this repository. Set `RELEASE_BASE_URL` to
   the public HTTPS folder containing those exact filenames. For GitHub Releases,
   its shape is `https://github.com/OWNER/REPO/releases/download/v1.0.0`.
4. Render runs the build and rewrites the public manifest's download links to that
   release folder. It hosts the small site over HTTPS. Test both downloads from
   the published URL and compare their hashes again.
5. Add a custom domain in Render after buying or supplying one and following its
   DNS instructions. No domain has been purchased or registered by this project.

GitHub regular file commits have a 100 MiB limit; both download binaries exceed
that threshold. They belong in release storage, not the normal Git tree. Render
hosting access and a real release host must be available before public deployment.
The site is deployed at https://velocinder-labs.onrender.com. See DEPLOYMENT.md for the current service, repository, and release links.

## Downloads

- Version: 1.0.0
- Platform: Windows 10/11 x64
- Installer: 108.5 MB, NSIS installer with directory selection, shortcuts, and
  uninstaller.
- Portable: 153.7 MB, extract the complete folder and run `Velocinder.exe`.
- Signature: both executable distributions are unsigned. NSIS build logs mention
  signing steps; an Authenticode inspection confirms the installer is NotSigned.
- Integrity: SHA-256 values are calculated from the actual release files.
- Public source download: not offered. The commissioning owner retains source
  locally, and third-party licenses remain intact.

No installer runs automatically when a visitor clicks Download. The browser
downloads the file; the visitor chooses whether to run it.

## Updating a release

Build and test the new browser and installer. Upload new files to a new versioned
release folder. Update file names, hashes, byte sizes, version copy, and release
notes in this site, then update `RELEASE_BASE_URL` and redeploy. The browser itself
does not yet have an automatic runtime updater.

## Before treating this as a public business

Velocinder Labs remains a provisional brand. The operator's real legal name,
contact method, business registration, and trademark clearance have not been
provided or completed. The privacy and license pages explicitly say so. A website
does not incorporate a company, register a trademark, establish copyright rights,
or guarantee legal compliance. Finalize those details before a formal public
business launch. No nonexistent legal entity is represented as registered.

## References

- Render Static Sites: https://render.com/docs/static-sites
- Render Blueprint configuration: https://render.com/docs/blueprint-spec
- NSIS builder: https://www.electron.build/v26/docs/nsis/
- GitHub file limits: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github

See `QA.md` for browser checks, design references, and remaining release checks.

