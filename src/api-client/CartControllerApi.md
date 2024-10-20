# .CartControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBookToCart**](CartControllerApi.md#addBookToCart) | **POST** /cart | 
[**changeQuantityInCart**](CartControllerApi.md#changeQuantityInCart) | **PATCH** /cart/book/{bookId} | 
[**getUserCartItems**](CartControllerApi.md#getUserCartItems) | **GET** /cart | 
[**removeBookFromCart**](CartControllerApi.md#removeBookFromCart) | **DELETE** /cart/book/{bookId} | 


# **addBookToCart**
> CartItemDTO addBookToCart(addBookToCartRequest)


### Example


```typescript
import { createConfiguration, CartControllerApi } from '';
import type { CartControllerApiAddBookToCartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartControllerApi(configuration);

const request: CartControllerApiAddBookToCartRequest = {
  
  addBookToCartRequest: {
    bookId: 1,
    quantity: 1,
    username: "username_example",
  },
};

const data = await apiInstance.addBookToCart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addBookToCartRequest** | **AddBookToCartRequest**|  |


### Return type

**CartItemDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **changeQuantityInCart**
> string changeQuantityInCart()


### Example


```typescript
import { createConfiguration, CartControllerApi } from '';
import type { CartControllerApiChangeQuantityInCartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartControllerApi(configuration);

const request: CartControllerApiChangeQuantityInCartRequest = {
  
  bookId: 1,
  
  quantity: 1,
};

const data = await apiInstance.changeQuantityInCart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**number**] |  | defaults to undefined
 **quantity** | [**number**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserCartItems**
> Array<CartItemDTO> getUserCartItems()


### Example


```typescript
import { createConfiguration, CartControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new CartControllerApi(configuration);

const request = {};

const data = await apiInstance.getUserCartItems(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CartItemDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeBookFromCart**
> string removeBookFromCart()


### Example


```typescript
import { createConfiguration, CartControllerApi } from '';
import type { CartControllerApiRemoveBookFromCartRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartControllerApi(configuration);

const request: CartControllerApiRemoveBookFromCartRequest = {
  
  bookId: 1,
};

const data = await apiInstance.removeBookFromCart(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**number**] |  | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


