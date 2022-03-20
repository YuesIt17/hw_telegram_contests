type TAuthUser = {
  userName: string;
};

type TAuthCallbacks = {
  login: (userName: string) => void;
  logout: () => void;
};

export type TAuthContex = Partial<TAuthUser & TAuthCallbacks>;
