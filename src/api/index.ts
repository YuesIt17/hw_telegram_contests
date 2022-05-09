type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {
  static baseApiUrl = `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_PORT_API}`;

  public static async request({url, init}: TRequest) {
    return fetch(`${this.baseApiUrl}/${url}`, init);
  }
}
