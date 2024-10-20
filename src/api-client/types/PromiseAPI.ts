import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddBookToCartRequest } from '../models/AddBookToCartRequest';
import { BookDTO } from '../models/BookDTO';
import { CartItemDTO } from '../models/CartItemDTO';
import { OrderDTO } from '../models/OrderDTO';
import { OrderItemDTO } from '../models/OrderItemDTO';
import { OrderRequest } from '../models/OrderRequest';
import { UserDTO } from '../models/UserDTO';
import { ObservableAuthControllerApi } from './ObservableAPI';

import { AuthControllerApiRequestFactory, AuthControllerApiResponseProcessor} from "../apis/AuthControllerApi";
export class PromiseAuthControllerApi {
    private api: ObservableAuthControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthControllerApiRequestFactory,
        responseProcessor?: AuthControllerApiResponseProcessor
    ) {
        this.api = new ObservableAuthControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public loginWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.loginWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public login(_options?: Configuration): Promise<string> {
        const result = this.api.login(_options);
        return result.toPromise();
    }

    /**
     * @param userDTO
     */
    public registerUserWithHttpInfo(userDTO: UserDTO, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.registerUserWithHttpInfo(userDTO, _options);
        return result.toPromise();
    }

    /**
     * @param userDTO
     */
    public registerUser(userDTO: UserDTO, _options?: Configuration): Promise<string> {
        const result = this.api.registerUser(userDTO, _options);
        return result.toPromise();
    }


}



import { ObservableBookControllerApi } from './ObservableAPI';

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class PromiseBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getAllBooksWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<BookDTO>>> {
        const result = this.api.getAllBooksWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllBooks(_options?: Configuration): Promise<Array<BookDTO>> {
        const result = this.api.getAllBooks(_options);
        return result.toPromise();
    }


}



import { ObservableCartControllerApi } from './ObservableAPI';

import { CartControllerApiRequestFactory, CartControllerApiResponseProcessor} from "../apis/CartControllerApi";
export class PromiseCartControllerApi {
    private api: ObservableCartControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CartControllerApiRequestFactory,
        responseProcessor?: CartControllerApiResponseProcessor
    ) {
        this.api = new ObservableCartControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param addBookToCartRequest
     */
    public addBookToCartWithHttpInfo(addBookToCartRequest: AddBookToCartRequest, _options?: Configuration): Promise<HttpInfo<CartItemDTO>> {
        const result = this.api.addBookToCartWithHttpInfo(addBookToCartRequest, _options);
        return result.toPromise();
    }

    /**
     * @param addBookToCartRequest
     */
    public addBookToCart(addBookToCartRequest: AddBookToCartRequest, _options?: Configuration): Promise<CartItemDTO> {
        const result = this.api.addBookToCart(addBookToCartRequest, _options);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param quantity
     */
    public changeQuantityInCartWithHttpInfo(bookId: number, quantity: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.changeQuantityInCartWithHttpInfo(bookId, quantity, _options);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param quantity
     */
    public changeQuantityInCart(bookId: number, quantity: number, _options?: Configuration): Promise<string> {
        const result = this.api.changeQuantityInCart(bookId, quantity, _options);
        return result.toPromise();
    }

    /**
     */
    public getUserCartItemsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<CartItemDTO>>> {
        const result = this.api.getUserCartItemsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getUserCartItems(_options?: Configuration): Promise<Array<CartItemDTO>> {
        const result = this.api.getUserCartItems(_options);
        return result.toPromise();
    }

    /**
     * @param bookId
     */
    public removeBookFromCartWithHttpInfo(bookId: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeBookFromCartWithHttpInfo(bookId, _options);
        return result.toPromise();
    }

    /**
     * @param bookId
     */
    public removeBookFromCart(bookId: number, _options?: Configuration): Promise<string> {
        const result = this.api.removeBookFromCart(bookId, _options);
        return result.toPromise();
    }


}



import { ObservableOrderControllerApi } from './ObservableAPI';

import { OrderControllerApiRequestFactory, OrderControllerApiResponseProcessor} from "../apis/OrderControllerApi";
export class PromiseOrderControllerApi {
    private api: ObservableOrderControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderControllerApiRequestFactory,
        responseProcessor?: OrderControllerApiResponseProcessor
    ) {
        this.api = new ObservableOrderControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param orderRequest
     */
    public createOrderWithHttpInfo(orderRequest: OrderRequest, _options?: Configuration): Promise<HttpInfo<OrderDTO>> {
        const result = this.api.createOrderWithHttpInfo(orderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param orderRequest
     */
    public createOrder(orderRequest: OrderRequest, _options?: Configuration): Promise<OrderDTO> {
        const result = this.api.createOrder(orderRequest, _options);
        return result.toPromise();
    }


}



