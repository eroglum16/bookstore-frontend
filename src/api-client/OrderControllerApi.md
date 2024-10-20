# .OrderControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](OrderControllerApi.md#createOrder) | **POST** /orders | 


# **createOrder**
> OrderDTO createOrder(orderRequest)


### Example


```typescript
import { createConfiguration, OrderControllerApi } from '';
import type { OrderControllerApiCreateOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderControllerApi(configuration);

const request: OrderControllerApiCreateOrderRequest = {
  
  orderRequest: {
    address: "address_example",
  },
};

const data = await apiInstance.createOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRequest** | **OrderRequest**|  |


### Return type

**OrderDTO**

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


