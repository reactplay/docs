---
sidebar_position: 5
---

# APIs hook

In ReactPlay, we work with APIs by using our custom-made react hooks. They are as follows:

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

As the name suggests, this hook can be used to create a temporary cache for any kind of data in our codebase (not on the browser).

**Input Parameters:**

- None

**Returned Value** - Array

- Getter function to fetch the `cached value` based on the `key`
- Setter function to create/update the `value` against the `key`

**Example**

```jsx
const [getCacheResponse, setCacheResponse] = useCacheResponse();
const response = axios(API_URL);
setCacheResponse(FILTER_DATA_RESPONSE, response);
// ....
const isCachedResponse = getCacheResponse(FILTER_DATA_RESPONSE);
```

In the above example, we are setting the `FILTER_DATA_RESPONSE` value based on the API response. This value is now stored as a cached response. We can then use `getCacheResponse` to access this cached value by passing the same key of `FILTER_DATA_RESPONSE`

## useContributors

This custom hook helps in retrieving the information about [ReactPlay's](https://github.com/reactplay/react-play) contributors.

**Input Parameters:**

- `sorted`: a boolean value
  If `true` is passed, the result would be a sorted list of contributors based on the number of contributions (highest to lowest).

**Returned Value** - Object

- An `isLoading` state represents a loader while the data is fetched.
- The `error` object contains details about any error that occurred while trying to fetch the data.
- The `data` object contains the list of contributors' information

**Example**

```jsx
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
);
```

## useFeaturedPlays

Invoking `useFeaturedPlays` hook would internally run a GraphQL query to retrieve the list of featured plays.

**Input Parameters:**

- None

**Returned Value** - Array

- A `loading` state that represents a loader while the data is fetched.
- The `error` object contains details about any error that occurred while trying to fetch the data.
- The `data` object contains the list of featured plays as an array.

**Example**

```jsx
const [loading, error, data] = useFeaturedPlays();
const success = !loading && !error && data.length;

return (
  <ul className="list-plays">
    {loading && <p>Loading...</p>}
    {error && <p>{error?.message ?? "Something went wrong"}</p>}
    {success &&
      data?.map((play, index) => <PlayThumbnail key={index} play={play} />)}
  </ul>
);
```

## useFetch

`useFetch` is a custom hook that creates a wrapper around the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) call. Although we use GraphQL to fetch data on react play, this hook would be useful while making REST API calls that are required while creating custom plays.

**Input Parameters:**

- `url`: Endpoint URL of the API
- `options`: An object to provide API options

**Returned Value** - Object

- A `loading` state that represents a loader while the data is fetched.
- The `error` object contains details about any error that occurred while trying to fetch the data.
- The `data` object contains the response from the API

**Example**

```jsx
const { data, loading, error } = useFetch(API_BASE_URL);

return (
  <div className="data-container">
    {loading && <p>Loading...</p>}
    {error && <p>{error?.message ?? "Something went wrong"}</p>}
    {data && <p>{data.content}</p>}
  </div>
);
```

## useGetPlays

Invoking `useGetPlays` hook would internally run a GraphQL query to retrieve the list of all the plays. This custom hook considers any filters that are applied through `Filter Play` options as well as any value provided in the search bar.

**Input Parameters:**

- None

**Returned Value** - Array

- A `loading` state that represents a loader while the data is fetched.
- The `error` object contains details about any error that occurred while trying to fetch the data.
- The `plays` object contains the list of plays as an array.

**Example**

```jsx
const [loading, error, plays] = useGetPlays();

if (loading) {
  return <Loader />;
}

if (plays?.length === 0 || error) {
  return (
    <div className="play-not-found">
      <ImageOops className="play-not-found-image" />
      <p className="page-404-lead">Play not found</p>
      <p className="page-404-desc">
        Please change your search or adjust filters to find plays.
      </p>
    </div>
  );
}
```

## useGitHub

`useGitHub` fetches the GitHub API to obtain information about a given user.

**Input Parameters:**

- `username`: GitHub username

**Returned Value** - object

- An `isLoading` state represents a loader while the data is fetched.
- The `error` object contains details about any error that occurred while trying to fetch the data.
- The `data` object contains the user's GitHub information.

**Example**

```jsx
const { data, error, isLoading } = useGitHub(`username`);

return (
  <div className="data-container">
    {loading && <p>Loading...</p>}
    {error && <p>{error?.message ?? "Something went wrong"}</p>}
    {data && <p>{data.login}</p>}
  </div>
);
```

## useLikePlays

This custom hook creates an abstraction around the `likePlay` and `unlikePlay` functions.

**Input Parameters:**

- None

**Returned Value** - Object

- `likePlay` function which takes a `playObject` that has been `liked`
- `unlikePlay` function which takes a `playObject` that has been `unliked`

**Example**

```jsx
const { likePlay, unLikePlay } = useLikePlays();
// ... code processing
await likePlay({ play_id: play.id, user_id: userId });
// ... some more processing
await unLikePlay({ ...mutationObj, liked: !likeObj.liked });
```

## useLocalStorage

This hook acts as an abstraction function for getting and setting [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) values.

**Input Parameters:**

- `key`
- `initialValue`

**Returned Value** - Array

- `storedValue` against the provided `key`
- `setValue` is a function to update the `storedValue` data on localStorage

**Example**

```jsx
const [localStoreExpenses, setLocalStoreExpenses] = useLocalStorage(
  "et-expenses",
  []
);
// accessing the stored value
const expense = localStoreExpenses[localStoreExpenses.length - 1];
// storing new values against the same key `et-expenses`
setLocalStoreExpenses([...localStoreExpenses, data]);
```
