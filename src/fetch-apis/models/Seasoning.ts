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
 *
 * @export
 * @interface Seasoning
 */
export interface Seasoning {}

export function SeasoningFromJSON(json: any): Seasoning {
  return SeasoningFromJSONTyped(json, false);
}

export function SeasoningFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Seasoning {
  return json;
}

export function SeasoningToJSON(value?: Seasoning | null): any {
  return value;
}
