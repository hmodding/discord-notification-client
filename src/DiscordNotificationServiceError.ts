/**
 * A discord notification service error indicates a failed request to the
 * notification service.
 */
export class DiscordNotificationServiceError extends Error {
  private statusCode: number;
  
  /**
   * Constructs a discord notification service error from an api response.
   * @param statusCode the http status code of the api response.
   * @param apiResponse the api response.
   */
  public constructor(statusCode: number, apiResponse?: {error: string, message: string}) {
    if (apiResponse === undefined) {
        super(`Unknown Discord Notification service error (code ${statusCode})!`);
    } else {
        super(`${apiResponse.error}: ${apiResponse.message}`);
    }
    this.name = 'DiscordNotificationServiceError';
    this.statusCode = statusCode;
  }

  /**
   * @returns the http status code from the service response.
   */
  public get getStatusCode() {
    return this.statusCode;
  }
}