# Zotero 8 Menu Compatibility Patch

## Problem

Zotero 8 rebuilds the library item context menu (`zotero-itemmenu`) before each
opening. Menu items appended directly via `document.getElementById('zotero-itemmenu').appendChild()`
during plugin startup are silently discarded, so Zotero IF's right-click
"Update IF(s)" action never appears.

## Solution

The patched `menuPopup.js` adds a new code path that uses Zotero 8's
`Zotero.MenuManager.registerMenu()` API when it is available:

- **`main/library/item`** — right-click a selected item to see the localized
  "Update IF(s)" action.
- **`main/menubar/tools`** — the same localized action also appears in the
  top-level Tools menu.

If `Zotero.MenuManager` is not present (Zotero 7 and earlier), the plugin
falls back to the original direct-DOM-insertion logic, so no existing behavior
is broken.

## Files

| File | Description |
|------|-------------|
| `menuPopup.js` | Drop-in replacement for `chrome/content/scripts/menuPopup.js` inside the XPI |
| `manifest-changes.json` | Describes the one-field change needed in `manifest.json` (`strict_max_version` → `999.*`) |

## How to apply

1. Unzip the released `.xpi`.
2. Replace `chrome/content/scripts/menuPopup.js` with the file in this
   directory.
3. In `manifest.json`, change `strict_max_version` from `"10.9.*"` to `"999.*"`.
4. Re-zip and install.

## Tested on

- Zotero 8.0.4 (Windows)
- Plugin version 1.6.0 (base) → 1.6.0.2 (patched)
