---
sidebar_position: 3
---

# লোকাল ডেভেলপমেন্ট

আপনি নিম্নলিখিত কারণে `react-play` রিপোটি সেটআপ করতে চানঃ

- `react-play` রিপোতে সাধারণভাবে কন্ট্রিবিউট শুরু করার জন্য অনুগ্রহ করে [কন্ট্রিবিউশন গাইডলাইন ](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md) দেখুন।

- আপনি নতুন একটি `Play` (যা হলো একটি রিয়েক্ট প্রজেক্ট) তৈরি করতে চান অথবা কন্ট্রিবিউটর হিসাবে একটি বিদ্যমান `Play` সংশোধন করতে চান। বিস্তারিত জানতে অনুগ্রহ করে [Play তৈরির গাইড](./How-To-Guides/how-to-create-play.md) দেখুন।

এখানে `react-play` রিপোটির সেটআপের সংক্ষিপ্ত পর্যালোচনা দেওয়া হলোঃ

## রিপোটি ফর্ক করুন এবং ক্লোন করুন।

প্রথমে, আপনাকে `react-play` রিপোটি ফর্ক করতে হবে। আপনি এটা করতে পারেন রিপোটির উপরের ডান প্রান্তের `Fork` বাটনে ক্লিক করে। যদি আপনি ফর্কিং সম্পর্কে নতুন হন তবে অনুগ্রহ করে শুরু করতে এই [YouTube গাইড](https://www.youtube.com/watch?v=h8suY-Osn8Q) দেখুন।

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h8suY-Osn8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ফর্ক করার পরে, আপনি ফর্ককৃত রিপোটির উপরে ডান দিকের শীর্ষ কোণে অবস্থিত `Clone or Download` বাটনে ক্লিক করে রিপোটি ক্লোন করতে পারেন।

রিপোটি ক্লোন করার পরে অনুগ্রহ করে `cd <ফোল্ডার-নাম>` কমান্ড ব্যবহার করে ডিরেক্টরি পরিবর্তন করুন।

## ডিপেন্ডেন্সিগুলো ইনস্টল করুন।

পরবর্তীতে, `react-play` রিপোতে নিম্নোক্ত কমান্ড চালানোর মাধ্যমে ডিপেন্ডেন্সিগুলো ইনস্টল করুনঃ

```bash
npm install

or

yarn install
```

<details>
<summary>আপনার পিসি-তে <code>yarn</code> ইনস্টল করা না থাকলে নিম্নলিখিত ধাপগুলি অনুসরণ করে ইনস্টল করুন।</summary>

**Windows**

1. আপনার কমান্ড প্রম্পটকে অ্যাডমিনিস্ট্রেটর হিসাবে খুলুন।
2. `corepack enable` লিখুন এবং enter চাপুন।
3. তারপর `npm install --global yarn` লিখুন এবং enter চাপুন।

**Linux**

1. অনুগ্রহ করে টার্মিনাল খুলে `npm install --global yarn` কমান্ডটি চালান।

**MacOS**

1. অনুগ্রহ করে টার্মিনাল খুলে `npm install --global yarn`
   অথবা
   `brew install yarn` কমান্ডটি চালান।

**অথবা প্যাকেজ ডাউনলোড করুন**

উপরে উল্লিখিত প্রক্রিয়া অনুসরণ করে Yarn ইনস্টল করতে না পারলে, আপনি সহজভাবে প্যাকেজটি ডাউনলোড করে ইনস্টল করতে পারেন। Yarn এর অফিসিয়াল ওয়েবসাইটে গিয়ে সেখানে "Alternative" সেকশনটি ভিজিট করুন; সেখানে Windows, Linux বা Mac এর জন্য Yarn ডাউনলোড করার জন্য আপনাকে ভার্সন নির্বাচন করতে বলা হবে।`https://classic.yarnpkg.com/en/docs/install#windows-stable`

</details>

> **দ্রষ্টব্য**: `ReactPlay` React 18 এ চালানো হয়। তবে, আমাদের কিছু ডিপেন্ডেন্সি এখনও ভার্সন 18 এ আপগ্রেড করেনি। তাই যদি ডিপেন্ডেন্সি ইনস্টল করতে সমস্যা হয়, তবে নিম্নলিখিত কমান্ড ব্যবহার করুন।

```bash
npm install --legacy-peer-deps
```

## আপনার প্রজেক্ট ফোল্ডারের রুটে একটি .env ফাইল তৈরি করুন এবং নিম্নলিখিত কনটেন্ট লিখুন।

```bash
REACT_APP_PLAY_API_URL=https://api.github.com/repos/reactplay
REACT_APP_NHOST_BACKEND_URL=https://rgkjmwftqtbpayoyolwh.nhost.run
REACT_APP_NHOST_VERSION=v1
REACT_APP_NHOST_ENDPOINT=graphql
REACT_APP_PLAY_WEB_SVC=https://api.reactplay.io/.netlify/functions/server
DISABLE_ESLINT_PLUGIN=true
REACT_APP_ACTIVITIES_ON=true
REACT_APP_ACTIVITY_ID=hackrplay
REACT_APP_DADJOKES_URL=https://jokeapi-v2.p.rapidapi.com/joke/
REACT_APP_DADJOKES_APIKEY='b71df95c75msha446fab91d0e935p1d0262jsn1d938cb85502'
REACT_APP_DADJOKES_APIHOST='jokeapi-v2.p.rapidapi.com'
```

## ডেভেলপমেন্ট মোড চালু করুন

ডেভেলপমেন্ট মোডে অ্যাপটি চালানোর জন্য নিম্নলিখিত কমান্ডটি ব্যবহার করুন:

```bash
npm start

or

yarn start
```

**দ্রষ্টব্য**: `start` স্ক্রিপ্ট স্বয়ংক্রিয়ভাবে "linters" প্রক্রিয়াকে কল করে। আপনি যদি `lint` ছাড়াই অ্যাপটি চালাতে চান তাহলে `start:nolint` ব্যবহার করুন।
তবে নিশ্চিত হয়ে নিন যে আপনি আপনার কোড commit করার আগে কমপক্ষে একবার start স্ক্রিপ্টটি চালাচ্ছেন। linter এররযুক্ত কোড রিভিউ করা হবে না।

এটি ডেভেলপমেন্ট মোডে অ্যাপটি চালায়। আপনার ব্রাউজারে দেখতে এটি [http://localhost:3000](http://localhost:3000) লিঙ্কে ওপেন করুন।

আপনি কোডে পরিবর্তন করলে পেজটি রিলোড হবে। আপনি কনসোলে যেকোনো lint এরর দেখতে পারবেন।

## কোড ফরম্যাট করুন এবং লিন্ট করুন

কোড ফরম্যাট এবং লিন্ট করার জন্য নিম্নলিখিত কমান্ড ব্যবহার করুন:

**কোড ফরম্যাট করুন**

```bash
yarn run format

or

npm run format
```

**লিন্টিং ইস্যু চেক করতে কোড লিন্ট করুন**

```bash
yarn run lint

or

npm run lint
```

**লিন্টিং ইস্যুগুলি ঠিক করতে**

```bash
yarn run lint:fix

or

npm run lint:fix
```

## প্রোডাকশনের জন্য অ্যাপটি বিল্ড করুন

প্রোডাকশনের জন্য অ্যাপটি বিল্ড করতে নিম্নলিখিত কমান্ডটি ব্যবহার করুন:

```bash
yarn build

or

npm build
```

এটি অ্যাপটিকে `build` ফোল্ডারের মাধ্যমে প্রোডাকশনে বিল্ড করে। এটি সঠিকভাবে React কে প্রোডাকশন মোডে বান্ডেল করে এবং বিল্ডটি সেরা পারফরম্যান্সের জন্য অপটিমাইজ করে। বিল্ডটি মিনিফাইড হয় এবং ফাইলনেমে হ্যাশগুলি থাকে।

## অ্যাপটি locally টেস্ট করুন (E2E with Cypress)

নিম্নলিখিত কমান্ড ব্যবহার করে Cypress locally চালান।

```bash
yarn cypress:open

or

npm cypress:open
```

এটি Cypress ড্যাশবোর্ড খুলবে, যার মাধ্যমে আপনাকে `E2E Testing` সিলেক্ট করতে হবে।
সিলেক্ট করা হলে, টেস্ট করার জন্য আপনার পছন্দসই ব্রাউজার সিলেক্ট করার অপশন পাবেন। ব্রাউজার নির্বাচন করার পর আপনাকে `Start E2E Testing in <SELECTED_BROWSER_NAME>` ক্লিক করতে হবে। নির্বাচিত ব্রাউজারটি একটি পপ আপ দেখাবে এবং আপনি Cypress টেস্টগুলির একটি তালিকা দেখতে পাবেন। টেস্ট শুরু করতে test-এ ক্লিক করুন।
