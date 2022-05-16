type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {
  public static async request({url, init}: TRequest) {
    try {
      const response = await fetch(`${this.baseApiUrl}/${url}`, init);
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response error.');
    } catch (e) {
      const message = e instanceof Error ? e.message : '500 server error';
      throw new Error(`${message}`);
    }
  }
}
