---
sidebar_position: 4
---

# APIs hook

In React Play, we work with APIs by using our custom-made react hooks. They are as follows:

1. [useCacheResponse](#usecacheresponse)
1. [useContributors](#usecontributors)
1. [useFeaturedPlays](#usefeaturedplays)
1. [useFetch](#usefetch)
1. [useGetPlays](#usegetplays)
1. [useGitHub](#usegithub)
1. [useLikePlays](#uselikeplays)
1. [useLocalStorage](#uselocalstorage)

In this section, we will discuss each of them in detail.

## useCacheResponse

As the name suggests, this hook is used to create and maintain a cached version of the data.

```JavaScript
  const [getCacheResponse, setCacheResponse] = useCacheResponse();
  const response = axios(API_URL);
  setCacheResponse(FILTER_DATA_RESPONSE, response);
  // ....
 const isCachedResponse = getCacheResponse(FILTER_DATA_RESPONSE);
```

`useCachedResponse()` returns a getter and a setter function. In the above example, we are setting the `FILTER_DATA_RESPONSE` value based on the API response. This value is now stored as a cached response. We can then use the getter function to access this cached value by passing the same key of `FILTER_DATA_RESPONSE`

## useContributors

This custom hook helps in retrieving the names of the contributors in [react play](https://github.com/reactplay/react-play) repository on GitHub. `useContributors` takes one parameter `sorted` which is a boolean value. If `true` is passed, the result is sorted in the ascending order of the number of contributions by the contributor. This function returns an object with `{ data, error, isLoading }`.

```JavaScript
 const { data, error, isLoading } = useContributors(true);

return (
  <ul className="list-contributors">
  {isLoading && <li>Loading...</li>}
  {error && <li>Error: {error.message}</li>}
  {data &&
    data.map((contributor) => (
      <li
        className="contributor"
        data-testid={`contributor-${contributor.id}`}
        key={contributor.id}
      >
      {contributor.login}
      </li>
   ))}
</ul>
)
```

## useFeaturedPlays

Invoking `useFeaturedPlays` hook would internally run a GraphQL query to retrieve the list of featured plays. This function returns an array of 3 items. A `loading` state used to represent a loader while the data is being fetched. The `error` object contains details about any error that occurred while trying to fetch the data. The `data` object contains the list of featured plays as an array.

```JavaScript
const [loading, error, data] = useFeaturedPlays();
const success = !loading && !error && data.length;

return(
  <ul className="list-plays">
  {loading && <p>Loading...</p>}
  {error && <p>{error?.message ?? 'Something went wrong'}</p>}
  {success && data?.map((play, index) => <PlayThumbnail key={index} play={play} />)}
</ul>
)
```

## useFetch

`useFetch` is a custom hook that creates a wrapper around the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) call. Although we use GraphQL to fetch data on react play, this hook would be useful while making REST API calls that are required while creating custom plays. `useFetch` accepts 2 parameters, `url` and `options` and returns an object with `{ data, error, isLoading }`.

```JavaScript
const { data, loading, error } = useFetch(API_BASE_URL);

return (
  <div className="data-container">
  {loading && <p>Loading...</p>}
  {error && <p>{error?.message ?? 'Something went wrong'}</p>}
  {data && <p>{data.content}</p>}
</div>
)
```

## useGetPlays

Invoking `useGetPlays` hook would internally run a GraphQL query to retrieve the list of all the plays. This custom hook considers any filters that are applied through `Filter Play` options as well as any value provided in the search bar. `useGetPlays` returns an array of 3 items. A `loading` state used to represent a loader while the data is being fetched. The `error` object contains details about any error that occurred while trying to fetch the data. The `data` object contains the list of featured plays as an array.

```JavaScript
const [loading, error, plays] = useGetPlays();

    if (loading) {
    return <Loader />;
  }

  if (plays?.length === 0 || error) {
    return (
      <div className="play-not-found">
        <ImageOops className="play-not-found-image" />
        <p className="page-404-lead">Play not found</p>
        <p className="page-404-desc">Please change your search or adjust filters to find plays.</p>
      </div>
    );
  }
```

## useGitHub

`useGitHub` fetches the GitHub API to obtain information about a given user. This hook takes one parameter which is the GitHub username and returns an object with `{ data, error, isLoading }`

```JavaScript
const {data, error, isLoading} = useGitHub(`username`);

return (
<div className="data-container">
  {loading && <p>Loading...</p>}
  {error && <p>{error?.message ?? 'Something went wrong'}</p>}
  {data && <p>{data.login}</p>}
</div>
)
```

## useLikePlays

This custom hook creates an abstraction around the `likePlay` and `unlikePlay` functions. Both these functions take the playObject as a paramter and performs the respective activity of like or unlike. `useLikePlays` returns an object with properties `{ likePlay, unlikePlay }`

```JavaScript
const { likePlay, unLikePlay } = useLikePlays();
// ... code processing
await likePlay({ play_id: play.id, user_id: userId });
// ... some more processing
await unLikePlay({ ...mutationObj, liked: !likeObj.liked });
```

## useLocalStorage
