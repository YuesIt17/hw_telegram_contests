
type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {

  static baseApiUrl: string = `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_PORT_API}`;

  public static async request({url, init}: TRequest) {
    return await fetch(`${this.baseApiUrl}/${url}`, init);
  }
}
