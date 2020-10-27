import post from "axios";
import { DiscordNotificationServiceError } from "./DiscordNotificationServiceError";
import { ModVersion } from "./entities/ModVersion";

/**
 * This client allows you to interact with a Discord notification service.
 */
export class DiscordNotificationServiceClient {
  private apiBaseUrl: string;
  private token: string;

  public constructor(apiBaseUrl: string, token: string) {
    this.apiBaseUrl = apiBaseUrl;
    this.token = token;

    // remove trailing slash
    if (this.apiBaseUrl.charAt(this.apiBaseUrl.length - 1) === '/') {
        this.apiBaseUrl = this.apiBaseUrl.substr(0, this.apiBaseUrl.length - 1);
    }
  }

  /**
   * Send a mod version release notification.
   * @param version the released mod version.
   */
  public async sendModVersionReleaseNotification(version: ModVersion): Promise<void> {
    const response = await post(this.apiBaseUrl + '/webhooks/mod/version', {
      data: version,
      auth: {
          username: 'user',
          password: this.token,
      },
      method: 'POST',
    });

    if (response.status !== 200) {
       if (response.data !== undefined && response.data.error !== undefined) {
           throw new DiscordNotificationServiceError(response.status, response.data);
       } else {
           throw new DiscordNotificationServiceError(response.status);
       }
    }
  }
}