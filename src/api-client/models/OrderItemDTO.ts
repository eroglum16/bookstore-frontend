/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BookDTO } from '../models/BookDTO';
import { OrderDTO } from '../models/OrderDTO';
import { HttpFile } from '../http/http';

export class OrderItemDTO {
    'id'?: number;
    'book'?: BookDTO;
    'order'?: OrderDTO;
    'quantity'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "book",
            "baseName": "book",
            "type": "BookDTO",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "OrderDTO",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return OrderItemDTO.attributeTypeMap;
    }

    public constructor() {
    }
}
