declare module "next-auth" {
  interface session {
    user: {
      id: number;
      name: string;
      email: string;
      accessToken: string;
    };
  }
}
