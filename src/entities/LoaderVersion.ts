/**
 * Contains mod loader version data that is relevant for the discord notification.
 */
export interface LoaderVersion {
  /**
   * The version "number" of the new release.
   */
  version: string;
  /**
   * A user-friendly name for the version of the modded game that the mod loader
   * was compile.
   */
  gameVersion: string;
  /**
   * Markdown-formatted changelog for this version.
   */
  changelog: string;
  /**
   * URL to the web page of this launcher version.
   */
  url: string;
}