# .AuthControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthControllerApi.md#login) | **POST** /login | 
[**registerUser**](AuthControllerApi.md#registerUser) | **POST** /register | 


# **login**
> string login()


### Example


```typescript
import { createConfiguration, AuthControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthControllerApi(configuration);

const request = {};

const data = await apiInstance.login(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **registerUser**
> string registerUser(userDTO)


### Example


```typescript
import { createConfiguration, AuthControllerApi } from '';
import type { AuthControllerApiRegisterUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthControllerApi(configuration);

const request: AuthControllerApiRegisterUserRequest = {
  
  userDTO: {
    id: 1,
    username: "username_example",
    password: "password_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    address: "address_example",
  },
};

const data = await apiInstance.registerUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | **UserDTO**|  |


### Return type

**string**

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


