/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 * post_o_auth2_token のレスポンスの型
 * @export
 * @interface GetMeResponseFromTraq
 */
export interface GetMeResponseFromTraq {
  /**
   *
   * @type {string}
   * @memberof GetMeResponseFromTraq
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof GetMeResponseFromTraq
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof GetMeResponseFromTraq
   */
  displayName: string;
  /**
   *
   * @type {string}
   * @memberof GetMeResponseFromTraq
   */
  iconFileId: string;
  /**
   *
   * @type {string}
   * @memberof GetMeResponseFromTraq
   */
  twitterId: string;
}

export function GetMeResponseFromTraqFromJSON(
  json: any,
): GetMeResponseFromTraq {
  return GetMeResponseFromTraqFromJSONTyped(json, false);
}

export function GetMeResponseFromTraqFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMeResponseFromTraq {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    displayName: json["displayName"],
    iconFileId: json["iconFileId"],
    twitterId: json["twitterId"],
  };
}

export function GetMeResponseFromTraqToJSON(
  value?: GetMeResponseFromTraq | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    displayName: value.displayName,
    iconFileId: value.iconFileId,
    twitterId: value.twitterId,
  };
}
