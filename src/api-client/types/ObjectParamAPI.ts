import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddBookToCartRequest } from '../models/AddBookToCartRequest';
import { BookDTO } from '../models/BookDTO';
import { CartItemDTO } from '../models/CartItemDTO';
import { OrderRequest } from '../models/OrderRequest';
import { UserDTO } from '../models/UserDTO';

import { ObservableAuthControllerApi } from "./ObservableAPI";
import { AuthControllerApiRequestFactory, AuthControllerApiResponseProcessor} from "../apis/AuthControllerApi";

export interface AuthControllerApiRegisterUserRequest {
    /**
     * 
     * @type UserDTO
     * @memberof AuthControllerApiregisterUser
     */
    userDTO: UserDTO
}

export class ObjectAuthControllerApi {
    private api: ObservableAuthControllerApi

    public constructor(configuration: Configuration, requestFactory?: AuthControllerApiRequestFactory, responseProcessor?: AuthControllerApiResponseProcessor) {
        this.api = new ObservableAuthControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public registerUserWithHttpInfo(param: AuthControllerApiRegisterUserRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.registerUserWithHttpInfo(param.userDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public registerUser(param: AuthControllerApiRegisterUserRequest, options?: Configuration): Promise<string> {
        return this.api.registerUser(param.userDTO,  options).toPromise();
    }

}

import { ObservableBookControllerApi } from "./ObservableAPI";
import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";

export interface BookControllerApiGetAllBooksRequest {
}

export class ObjectBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(configuration: Configuration, requestFactory?: BookControllerApiRequestFactory, responseProcessor?: BookControllerApiResponseProcessor) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getAllBooksWithHttpInfo(param: BookControllerApiGetAllBooksRequest = {}, options?: Configuration): Promise<HttpInfo<Array<BookDTO>>> {
        return this.api.getAllBooksWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllBooks(param: BookControllerApiGetAllBooksRequest = {}, options?: Configuration): Promise<Array<BookDTO>> {
        return this.api.getAllBooks( options).toPromise();
    }

}

import { ObservableCartControllerApi } from "./ObservableAPI";
import { CartControllerApiRequestFactory, CartControllerApiResponseProcessor} from "../apis/CartControllerApi";

export interface CartControllerApiAddBookToCartRequest {
    /**
     * 
     * @type AddBookToCartRequest
     * @memberof CartControllerApiaddBookToCart
     */
    addBookToCartRequest: AddBookToCartRequest
}

export interface CartControllerApiChangeQuantityInCartRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CartControllerApichangeQuantityInCart
     */
    bookId: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CartControllerApichangeQuantityInCart
     */
    quantity: number
}

export interface CartControllerApiGetUserCartItemsRequest {
}

export interface CartControllerApiRemoveBookFromCartRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CartControllerApiremoveBookFromCart
     */
    bookId: number
}

export class ObjectCartControllerApi {
    private api: ObservableCartControllerApi

    public constructor(configuration: Configuration, requestFactory?: CartControllerApiRequestFactory, responseProcessor?: CartControllerApiResponseProcessor) {
        this.api = new ObservableCartControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public addBookToCartWithHttpInfo(param: CartControllerApiAddBookToCartRequest, options?: Configuration): Promise<HttpInfo<CartItemDTO>> {
        return this.api.addBookToCartWithHttpInfo(param.addBookToCartRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public addBookToCart(param: CartControllerApiAddBookToCartRequest, options?: Configuration): Promise<CartItemDTO> {
        return this.api.addBookToCart(param.addBookToCartRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public changeQuantityInCartWithHttpInfo(param: CartControllerApiChangeQuantityInCartRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.changeQuantityInCartWithHttpInfo(param.bookId, param.quantity,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public changeQuantityInCart(param: CartControllerApiChangeQuantityInCartRequest, options?: Configuration): Promise<string> {
        return this.api.changeQuantityInCart(param.bookId, param.quantity,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserCartItemsWithHttpInfo(param: CartControllerApiGetUserCartItemsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CartItemDTO>>> {
        return this.api.getUserCartItemsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserCartItems(param: CartControllerApiGetUserCartItemsRequest = {}, options?: Configuration): Promise<Array<CartItemDTO>> {
        return this.api.getUserCartItems( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public removeBookFromCartWithHttpInfo(param: CartControllerApiRemoveBookFromCartRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeBookFromCartWithHttpInfo(param.bookId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public removeBookFromCart(param: CartControllerApiRemoveBookFromCartRequest, options?: Configuration): Promise<string> {
        return this.api.removeBookFromCart(param.bookId,  options).toPromise();
    }

}

import { ObservableOrderControllerApi } from "./ObservableAPI";
import { OrderControllerApiRequestFactory, OrderControllerApiResponseProcessor} from "../apis/OrderControllerApi";

export interface OrderControllerApiCreateOrderRequest {
    /**
     * 
     * @type OrderRequest
     * @memberof OrderControllerApicreateOrder
     */
    orderRequest: OrderRequest
}

export class ObjectOrderControllerApi {
    private api: ObservableOrderControllerApi

    public constructor(configuration: Configuration, requestFactory?: OrderControllerApiRequestFactory, responseProcessor?: OrderControllerApiResponseProcessor) {
        this.api = new ObservableOrderControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createOrderWithHttpInfo(param: OrderControllerApiCreateOrderRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.createOrderWithHttpInfo(param.orderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createOrder(param: OrderControllerApiCreateOrderRequest, options?: Configuration): Promise<string> {
        return this.api.createOrder(param.orderRequest,  options).toPromise();
    }

}
