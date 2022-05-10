type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {
  public static async request({url, init}: TRequest) {
    const response = await fetch(`${process.env.REACT_URL_API}${url}`, init);
    return response.json();
  }
}
