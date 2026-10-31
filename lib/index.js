//#region host half
/**
 * dsh-plugin-reasoning-seat — host half.
 *
 * This is a pure client UI plugin: the composer model seat lives in
 * `exports["./client"]`, discovered through the package.json `dsh.client`
 * declaration. The empty `apply` exists so the plugin can appear as a Loader
 * row (see cordis.patch.yml), which is what makes dsh-client-modules scan and
 * serve the browser bundle.
 */
export function apply() {}
//#endregion
