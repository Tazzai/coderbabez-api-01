# CoderBabez

##  Week ??? - APIs

### Objectives

Learn about APIs and use the Giphy API to build a gif search page


### Vocab
* API
* JSON

### Lesson - APIs!

API = Application Program Interface

????

An API is an interface for conversing with 3rd party services.

* Facebook provides an API for logging in as a FB user and accessing your FB profile info
* Twitter provides an API for building your own Twitter client
* BarkBox provides an API so that mobile apps can view their order history and reorder from the app
* Giphy provides an API so you can search for gifs

APIs have some very common actions:

1. `GET` data (retrieve 1 or more resources: get my subscription from BarkBox)
2. `POST` new data (create a new resource: create a new subscription)
3. `PUT` or `PATCH` a change in data (update a resource: change my subscription size)
4. `DELETE` data (delete a resource: terminate my subscription)

GET POST PUT PATCH and DELETE are all [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). There are others, but those are the most common ones.

For each of these methods, you also specify a url and additional parameters.

The url looks a lot like the address you enter in a web browser. In fact, when you go to a webpage, your browser sends a GET request with the url.

![get barkbox.com](http://wiki-content-bark.s3.amazonaws.com/coderbabez-get-barkbox.png)

The request was made with the GET method. It retrieved the URL 'https://barkbox.com'. The response was a status 200 and the body contained the html of the site.

```
request method: GET
request url: https://barkbox.com
response code: 200
response body: the page html
```

[Response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are numbers that indicate if the request was successful or not. 200-level response codes indicate success. 400-level response codes indicate an application code error. There are more but those are the most important.

For example: 
```
200: OK
201: Created
401: Unauthorized
403: Forbidden
404: Not found
```

_When would you expect to encounter these codes?_

---------------------------------------


So far, we've only been talking about loading a webpage? What does that have to do with anything?

APIs and loading web pages in the browser use the same process:

1. Make a request by specifying a `method`, a `url`, and optional `parameters`
2. Get a response that contains a `status code` and content in the `body`

For a web page, the parameters are always query parameters like `https://barkbox.com?url_coupon=FIRSTBOXFREE` and the response body is always in html format.


For an api, the parameters can be thought of separately from the url and we use `JSON` as the format. (There are other formats like XML, but those are icky and JSON is very popular)

JSON is a way of representing javascript object as a string. 

For example: [http://api.giphy.com/v1/gifs/search?q=dog&api_key=Rcx7a5vfUp1y6BZ1KjUtKLI2UovfkU3j](http://api.giphy.com/v1/gifs/search?q=dog&api_key=Rcx7a5vfUp1y6BZ1KjUtKLI2UovfkU3j)
![BarkBox Plans API](http://wiki-content-bark.s3.amazonaws.com/coderbabez-giphy-search.png)


We can make that same request using jQuery instead of a browser:

```
$.getJSON( // make a request GET http method
  "https://api.giphy.com/v1/gifs/search?q=dog&api_key=Rcx7a5vfUp1y6BZ1KjUtKLI2UovfkU3j", // request url
  function(response) {   // response handler method
    console.log(response);
  }
);
```

Try it! What are the results?


Take a look at the [Giphy API documentation](https://developers.giphy.com/docs/). 

* What are the parameters we specified in the request?
* What type of data is returned?


### Project

Make a giphy search tool. Users can enter a search term. The page displays the first result.

For example: [https://becsegal.github.io/coderbabez-api-01/solution/](https://becsegal.github.io/coderbabez-api-01/solution/]


# Reference:

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
* https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
* http://api.jquery.com/jquery.ajax/
* https://developers.giphy.com/docs/
