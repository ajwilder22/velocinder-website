# Website and release verification

## Functional checks

Playwright with locally installed Chrome tested the site at 1536 × 1024,
390 × 844, and 780 × 1024. The Browser plugin skill was not available; regular
Playwright was used. The local preview was also queued in Codex's browser panel.

Passed: meaningful first screen, correct page title, responsive navigation,
mobile menu dismissal, FAQ disclosure, SHA-256 dialog, installer download,
downloaded-file hash matching the release manifest, privacy/license/release-note
pages, and absence of relevant console errors. Desktop, tablet, and mobile had
no unintended horizontal overflow. A decorative orbit overflow was repaired.

The site's installer link downloads the real 113,783,023-byte NSIS executable.
Authenticode status was checked: NotSigned. Compilation and download integrity
passed. Clean-machine interactive install/uninstall, publisher signing, and a
Windows SmartScreen reputation review were not performed. No installer was run
against the owner's normal desktop during QA.

## Visual review

Three Image Gen concepts cover the hero, features, and downloads/FAQ/about/footer.
Concepts are in `design/`. Captured preview is `preview.png`. The concepts and
latest rendered screenshots were inspected with view_image. Comparison covered
dark graphite/violet palette, hero hierarchy and exact heading, navigation and
button geometry, open feature columns, typography, whitespace, download layout,
FAQ disclosures, and mobile adaptation.

The implementation was faithfully checked against the concept direction with
these intentional differences:

- The hero uses an actual screenshot of the built browser, not Image Gen's
  invented mountain wallpaper and unsupported controls.
- The third public download column offers release information instead of original
  source, respecting the user's earlier request to discourage copying.
- Actual file sizes replace generated example sizes. Additional FAQ text explains
  ad-block coverage. The company text remains explicit about provisional status.
- Code-native brand and search initials replace third-party logos. Illustrative
  feature controls are labeled as illustrations and do not pose as real settings.
- The feature strip retains only grounded labels, omitting generated unverified
  speed claims. All above-the-fold product text comes from the design brief,
  with an additional conditional Windows-only note for non-Windows visitors.

The current readable implementation has no material clipping or broken controls
in the inspected layouts. Pixel-identical output is not claimed.

## Deployment checks still needed

Public release URLs, actual Render Blueprint validation, live HTTPS and custom
domain behavior, download transfers from the production host, final operator
identity/contact details, and legal/trademark review remain unverified. The
local site and deployable files exist; no live service is claimed.
