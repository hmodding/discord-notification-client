/**
 * Contains mod version data that is relevant for the discord notification.
 */
export interface ModVersion {
    /**
     * Title of the mod.
     */
    modTitle: string;
    /**
     * Description of the mod.
     */
    modDescription: string;
    /**
     * URL to the banner image of this mod.
     */
    modBannerUrl: string;
    /**
     * URL to the icon image of this mod.
     */
    modIconUrl: string;
    /**
     * URL to the web page of the mod.
     */
    modUrl: string;
    /**
     * Name of the mod author.
     */
    modAuthorName: string;
    /**
     * URL to the web page of the user.
     */
    modAuthorUrl: string;
    /**
     * The version "number" of the new release.
     */
    version: string;
    /**
     * Markdown-formatted changelog for this version.
     */
    changelog: string;
    /**
     * Whether this is the initial version of the mod.
     */
    initial: boolean;
  }