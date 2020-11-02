import { AxiosError } from "axios";
import post from "axios";
import { DiscordNotificationServiceError } from "./DiscordNotificationServiceError";
import { ModVersion } from "./entities/ModVersion";
import { LoaderVersion } from "./entities/LoaderVersion";
import { LauncherVersion } from "./entities/LauncherVersion";

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
    try {
      await post(this.apiBaseUrl + '/webhooks/mod/version', {
        data: version,
        auth: {
            username: 'user',
            password: this.token,
        },
        method: 'POST',
      });
    } catch (error) {
      handleAxiosError(error)
    }
  }

  /**
   * Send a mod loader version release notification.
   * @param version the released mod loader version.
   */
  public async sendLoaderVersionReleaseNotification(version: LoaderVersion): Promise<void> {
    try {
      await post(this.apiBaseUrl + '/webhooks/loader/version', {
        data: version,
        auth: {
          username: 'user',
          password: this.token,
        },
        method: 'POST',
      });
    } catch (error) {
      handleAxiosError(error);
    }
  }

  /**
   * Send a launcher version release notification.
   * @param version the released launcher version.
   */
  public async sendLauncherVersionReleaseNotification(version: LauncherVersion): Promise<void> {
    try {
      await post(this.apiBaseUrl + '/webhooks/launcher/version', {
        data: version,
        auth: {
          username: 'user',
          password: this.token,
        },
        method: 'POST',
      });
    } catch (error) {
      handleAxiosError(error);
    }
  }
}

function handleAxiosError(error: any): void {
  if (typeof error === 'object' && error.isAxiosError === true) {
    let axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response?.status !== 200) {
      if (axiosError.response.data !== undefined && axiosError.response.data.error !== undefined) {
          throw new DiscordNotificationServiceError(axiosError.response.status, axiosError.response.data);
      } else {
          throw new DiscordNotificationServiceError(axiosError.response.status);
      }
    } else {
      throw error;
    }
  }
}