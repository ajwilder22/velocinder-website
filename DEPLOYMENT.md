# Velocinder deployment

Live website: https://velocinder-labs.onrender.com
Render service: https://dashboard.render.com/static/srv-dau6bug93c1s73ctel0g
Render Blueprint: https://dashboard.render.com/blueprint/exs-dau6bpmk1f9s73ahmmk0
Website repository: https://github.com/ajwilder22/velocinder-website
Windows release: https://github.com/ajwilder22/velocinder-website/releases/tag/v1.0.0

Deployed to the existing Gaming workspace as a Render Static Site. No paid web
service or domain was purchased. Render account bandwidth/build allowances apply.

Render build command: node build.cjs
Publish directory: dist
Branch: main
RELEASE_BASE_URL: https://github.com/ajwilder22/velocinder-website/releases/download/v1.0.0

Website changes are made in the website-only repository and auto-deployed from
main. Browser original source remains local. Public release assets contain the
installer, portable browser, and checksums, not browser original source.

Live checks: HTTPS page, production release manifest, mobile menu, FAQ, and
checksum dialog. Windows downloads remain unsigned. Clean-machine installer
execution, trademark clearance, incorporation, custom domain, and legal operator
identity/contact details have not been completed.
