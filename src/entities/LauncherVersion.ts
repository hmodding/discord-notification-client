/**
 * Contains launcher version data that is relevant for the discord notification.
 */
export interface LauncherVersion {
  /**
   * The version "number" of the new release.
   */
  version: string;
  /**
   * Markdown-formatted changelog for this version.
   */
  changelog: string;
  /**
   * URL to the web page of this launcher version.
   */
  url: string;
}