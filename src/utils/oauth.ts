import { apis } from "../utils/apis.ts";
import {
  ResponseError,
  type InitOverideFunction,
} from "../fetch-apis/runtime.ts";

export const wrapOAuth = async <T>(
  fetchRes: Promise<T>,
  isLog?: boolean,
): Promise<T | undefined> => {
  return fetchRes
    .then((res) => {
      if (isLog) {
        console.log(res);
      }
      return res;
    })
    .catch((e: ResponseError) => {
      if (isLog) {
        console.log(e.response);
      }
      if (e.response.status == 401) {
        (async () => {
          const redirectUriRes = await apis.oauth.getOauthRedirectUri();
          sessionStorage.setItem(
            "tempDestination",
            window.location.href.split("?")[0],
          );
          window.location.assign(redirectUriRes.redirectUri);
        })();
        return undefined;
      }
    });
};
