---
sidebar_position: 5
---

# APIs হুক

ReactPlay এ, আমরা আমাদের নিজস্ব তৈরি করা রিয়েক্ট হুক ব্যবহার করে API-এর সঙ্গে কাজ করি। নিম্নে তা দেওয়া হলোঃ

1. [useCacheResponse](#usecacheresponse)
1. [useContributors](#usecontributors)
1. [useFeaturedPlays](#usefeaturedplays)
1. [useFetch](#usefetch)
1. [useGetPlays](#usegetplays)
1. [useGitHub](#usegithub)
1. [useLikePlays](#uselikeplays)
1. [useLocalStorage](#uselocalstorage)

এই সেকশনে আমরা প্রতিটি হুককে বিস্তারিতভাবে আলোচনা করব।

## useCacheResponse

নাম থেকেই অনুমান করা যায়, এই হুকটি ব্যবহার করে কোডবেসে (ব্রাউজারে নয়) যেকোনো ধরণের ডেটা জন্য একটি অস্থায়ী ক্যাশ তৈরি করা যায়।

**ইনপুট প্যারামিটার:**

- None

**রিটার্নকৃত মান** - অ্যারে

- `key` এর উপর ভিত্তি করে `cached value` ফেচ করার জন্য গেটার ফাংশন
- `key` এর বিপরীতে `value` তৈরি / আপডেট করার জন্য সেটার ফাংশন

**উদাহরণ**

```jsx
const [getCacheResponse, setCacheResponse] = useCacheResponse();
const response = axios(API_URL);
setCacheResponse(FILTER_DATA_RESPONSE, response);
// ....
const isCachedResponse = getCacheResponse(FILTER_DATA_RESPONSE);
```

উপরের উদাহরণে, আমরা API রেসপন্সের উপরে ভিত্তি করে `FILTER_DATA_RESPONSE` ভ্যালুটি সেট করছি। এই ভ্যালুটি এখন ক্যাশ রেসপন্স হিসাবে সংরক্ষিত হয়েছে। আমরা এখানে `getCacheResponse` ব্যবহার করে `FILTER_DATA_RESPONSE` এর একই key পাস করে এই ক্যাশ ভ্যালুকে অ্যাক্সেস করতে পারি।

## useContributors

এই কাস্টম হুকটি [ReactPlay's](https://github.com/reactplay/react-play) এর কন্ট্রিবিউটরদের তথ্য পেতে সহায়তা করে।

**ইনপুট প্যারামিটার:**

- `sorted`: একটি বুলিয়ান মান
  যদি `true` পাস করা হয়, ফলাফল হবে কন্ট্রিবিউশনের সংখ্যা অনুযায়ী কন্ট্রিবিউটরদের একটি সাজানো তালিকা (সর্বাধিক থেকে সর্বনিম্ন)

**রিটার্নকৃত মান** - অবজেক্ট

- `isLoading` স্টেট ডাটা ফেচ হওয়ার সময় লোডার প্রদর্শন করে।
- `error` অবজেক্টটি ডেটা ফেচ করার সময় সংঘটিত কোনো এরর সম্পর্কে বিস্তারিত তথ্য ধারণ করে।
- `data` অবজেক্টটি কন্ট্রিবিউটরদের তথ্যের তালিকা ধারণ করে।

**উদাহরণ**

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

`useFeaturedPlays` হুকটি ইনটারনালি একটি GraphQL কুয়েরি চালায় যার মাধ্যমে ফিচার play-সমূহের একটি তালিকা পাওয়া যায়।

**ইনপুট প্যারামিটার**

- None

**রিটার্নকৃত মান** - অ্যারে

- `isLoading` স্টেট ডাটা ফেচ হওয়ার সময় লোডার প্রদর্শন করে।
- `error` অবজেক্টটি ডেটা ফেচ করার সময় সংঘটিত কোনো এরর সম্পর্কে বিস্তারিত তথ্য ধারণ করে।
- `data` অবজেক্টটি অ্যারে আকারে ফিচার play-সমূহের তালিকা ধারণ করে।

**উদাহরণ**

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

`useFetch` হল একটি কাস্টম হুক যা [ফেচ](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) কলের সময় এর চারপাশে একটি রেপার তৈরি করে। যদিও আমরা ReactPlay-তে ডেটা ফেচ করতে গ্রাফকিউএল ব্যবহার করি, কিন্তু কাস্টম প্লে তৈরি করার সময় প্রয়োজনীয় REST API কল করতে `useFetch` হুক ব্যবহারকারীকে সহায়তা করবে।

**ইনপুট প্যারামিটার:**

- `url`: API-র এন্ডপয়েন্ট URL।
- `options`:: API অপশনসমূহ প্রদানের জন্য একটি অবজেক্ট।

**রিটার্নকৃত মান** - অবজেক্ট

- `isLoading` স্টেট ডাটা ফেচ হওয়ার সময় লোডার প্রদর্শন করে।
- `error` অবজেক্টটি ডেটা ফেচ করার সময় সংঘটিত কোনো এরর সম্পর্কে বিস্তারিত তথ্য ধারণ করে।
- `data` অবজেক্টটি API হতে রেসপন্স ধারণ করে।

**উদাহরণ**

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

`useGetPlays` হুকটি ইনটারনালি একটি GraphQL কুয়েরি চালায় যার মাধ্যমে play-সমূহের একটি তালিকা পাওয়া যায়। এই কাস্টম হুকটি `Filter Play` অপশনগুলির মাধ্যমে প্রয়োগ করা ফিল্টারগুলি এবং সার্চ বারে প্রদত্ত যেকোনো মানও বিবেচনা করে।

**ইনপুট প্যারামিটার:**

- None

**রিটার্নকৃত মান** - অ্যারে

- `isLoading` স্টেট ডাটা ফেচ হওয়ার সময় লোডার প্রদর্শন করে।
- `error` অবজেক্টটি ডেটা ফেচ করার সময় সংঘটিত কোনো এরর সম্পর্কে বিস্তারিত তথ্য ধারণ করে।
- `data` অবজেক্টটি অ্যারে আকারে play-সমূহের তালিকা ধারণ করে।

**উদাহরণ**

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

`useGitHub` হুকটি প্রদত্ত ব্যবহারকারীর সম্পর্কে তথ্য পেতে গিটহাব API-কে ফেচ করে।

**ইনপুট প্যারামিটার:**

- `username`: গিটহাব ব্যবহারকারীর নাম

**রিটার্নকৃত মান** - অবজেক্ট

অ্যারে

- `isLoading` স্টেট ডাটা ফেচ হওয়ার সময় লোডার প্রদর্শন করে।
- `error` অবজেক্টটি ডেটা ফেচ করার সময় সংঘটিত কোনো এরর সম্পর্কে বিস্তারিত তথ্য ধারণ করে।
- `data` অবজেক্টটি গিটহাব ব্যবহারকারীর তথ্য ধারণ করে।

**উদাহরণ**

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

এই কাস্টম হুকটি `likePlay` এবং `unlikePlay` ফাংশনগুলির চারপাশে একটি অ্যাবস্ট্র্যাকশন তৈরি করে।

**ইনপুট প্যারামিটার:**

- None

**রিটার্নকৃত মান** - অবজেক্ট

- `likePlay` ফাংশন একটি `playObject` গ্রহণ করে যা `liked` করা হয়েছে
- `unlikePlay` ফাংশন একটি `playObject` গ্রহণ করে যা `unliked` করা হয়েছে

**উদাহরণ**

```jsx
const { likePlay, unLikePlay } = useLikePlays();
// ... code processing
await likePlay({ play_id: play.id, user_id: userId });
// ... some more processing
await unLikePlay({ ...mutationObj, liked: !likeObj.liked });
```

## useLocalStorage

এই হুকটি [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)-এর ভ্যালুগুলি পেতে এবং সেট করতে একটি অ্যাবস্ট্র্যাকশন ফাংশন হিসাবে কাজ করে।

**ইনপুট প্যারামিটার:**

- `key`
- `initialValue`

**রিটার্নকৃত মান** - অ্যারে

- `storedValue` প্রদত্ত `key` এর বিপরীতে সংরক্ষিত মান
- `setValue` লোকালস্টোরেজে `storedValue` ডেটা আপডেট করার জন্য একটি ফাংশন

**উদাহরণ**

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
