type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {
  public static async request({url, init}: TRequest) {
    return await fetch(`${process.env.REACT_APP_API}${url}`, init);
  }
}
