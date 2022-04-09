type TAuthUser = {
  userName: string;
  isUserAuthorization: boolean;
};

type TAuthCallbacks = {
  login: (userName: string) => void;
  logout: () => void;
};

export type TAuthContex = Partial<TAuthUser & TAuthCallbacks>;
