# .BookControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllBooks**](BookControllerApi.md#getAllBooks) | **GET** /books | 


# **getAllBooks**
> Array<BookDTO> getAllBooks()


### Example


```typescript
import { createConfiguration, BookControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new BookControllerApi(configuration);

const request = {};

const data = await apiInstance.getAllBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<BookDTO>**

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


