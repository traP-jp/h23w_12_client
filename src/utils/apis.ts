import { BaseAPI, Configuration, DefaultApi, OauthApi } from "../fetch-apis";

const conf = new Configuration({
  basePath: import.meta.env.PUBLIC_API_BASE_URL,
  credentials: "include",
});

export const apis = {
  base: new BaseAPI(conf),
  defa: new DefaultApi(conf),
  oauth: new OauthApi(conf),
};
