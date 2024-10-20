import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddBookToCartRequest } from '../models/AddBookToCartRequest';
import { BookDTO } from '../models/BookDTO';
import { CartItemDTO } from '../models/CartItemDTO';
import { OrderDTO } from '../models/OrderDTO';
import { OrderItemDTO } from '../models/OrderItemDTO';
import { OrderRequest } from '../models/OrderRequest';
import { UserDTO } from '../models/UserDTO';

import { AuthControllerApiRequestFactory, AuthControllerApiResponseProcessor} from "../apis/AuthControllerApi";
export class ObservableAuthControllerApi {
    private requestFactory: AuthControllerApiRequestFactory;
    private responseProcessor: AuthControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthControllerApiRequestFactory,
        responseProcessor?: AuthControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthControllerApiResponseProcessor();
    }

    /**
     */
    public loginWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.login(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public login(_options?: Configuration): Observable<string> {
        return this.loginWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * @param userDTO
     */
    public registerUserWithHttpInfo(userDTO: UserDTO, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.registerUser(userDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userDTO
     */
    public registerUser(userDTO: UserDTO, _options?: Configuration): Observable<string> {
        return this.registerUserWithHttpInfo(userDTO, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class ObservableBookControllerApi {
    private requestFactory: BookControllerApiRequestFactory;
    private responseProcessor: BookControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BookControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BookControllerApiResponseProcessor();
    }

    /**
     */
    public getAllBooksWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<BookDTO>>> {
        const requestContextPromise = this.requestFactory.getAllBooks(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllBooks(_options?: Configuration): Observable<Array<BookDTO>> {
        return this.getAllBooksWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<BookDTO>>) => apiResponse.data));
    }

}

import { CartControllerApiRequestFactory, CartControllerApiResponseProcessor} from "../apis/CartControllerApi";
export class ObservableCartControllerApi {
    private requestFactory: CartControllerApiRequestFactory;
    private responseProcessor: CartControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CartControllerApiRequestFactory,
        responseProcessor?: CartControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CartControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CartControllerApiResponseProcessor();
    }

    /**
     * @param addBookToCartRequest
     */
    public addBookToCartWithHttpInfo(addBookToCartRequest: AddBookToCartRequest, _options?: Configuration): Observable<HttpInfo<CartItemDTO>> {
        const requestContextPromise = this.requestFactory.addBookToCart(addBookToCartRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBookToCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param addBookToCartRequest
     */
    public addBookToCart(addBookToCartRequest: AddBookToCartRequest, _options?: Configuration): Observable<CartItemDTO> {
        return this.addBookToCartWithHttpInfo(addBookToCartRequest, _options).pipe(map((apiResponse: HttpInfo<CartItemDTO>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param quantity
     */
    public changeQuantityInCartWithHttpInfo(bookId: number, quantity: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.changeQuantityInCart(bookId, quantity, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeQuantityInCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param quantity
     */
    public changeQuantityInCart(bookId: number, quantity: number, _options?: Configuration): Observable<string> {
        return this.changeQuantityInCartWithHttpInfo(bookId, quantity, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     */
    public getUserCartItemsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<CartItemDTO>>> {
        const requestContextPromise = this.requestFactory.getUserCartItems(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserCartItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getUserCartItems(_options?: Configuration): Observable<Array<CartItemDTO>> {
        return this.getUserCartItemsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<CartItemDTO>>) => apiResponse.data));
    }

    /**
     * @param bookId
     */
    public removeBookFromCartWithHttpInfo(bookId: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeBookFromCart(bookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeBookFromCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     */
    public removeBookFromCart(bookId: number, _options?: Configuration): Observable<string> {
        return this.removeBookFromCartWithHttpInfo(bookId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { OrderControllerApiRequestFactory, OrderControllerApiResponseProcessor} from "../apis/OrderControllerApi";
export class ObservableOrderControllerApi {
    private requestFactory: OrderControllerApiRequestFactory;
    private responseProcessor: OrderControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderControllerApiRequestFactory,
        responseProcessor?: OrderControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderControllerApiResponseProcessor();
    }

    /**
     * @param orderRequest
     */
    public createOrderWithHttpInfo(orderRequest: OrderRequest, _options?: Configuration): Observable<HttpInfo<OrderDTO>> {
        const requestContextPromise = this.requestFactory.createOrder(orderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderRequest
     */
    public createOrder(orderRequest: OrderRequest, _options?: Configuration): Observable<OrderDTO> {
        return this.createOrderWithHttpInfo(orderRequest, _options).pipe(map((apiResponse: HttpInfo<OrderDTO>) => apiResponse.data));
    }

}
