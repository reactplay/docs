---
sidebar_position: 2
---

# কিভাবে আপনার Play-তে স্টাইল যোগ করবেন?

স্টাইল একটি Play-এর গুরুত্বপূর্ণ অংশ এবং আপনার কোডটি সংরক্ষণযোগ্য এবং স্কেলেবল হতে হলে বেস্ট প্র্যাকটিসসমূহ অনুসরণ করা গুরুত্বপূর্ণ। এখানে কিছু **করবেন এবং করবেন না** সূচনা দেওয়া হলো, আপনি যখন আপনার Play-তে স্টাইল যোগ করবেন, তখন এগুলো মনে রাখতে হবে:

## করবেন

- Play-এর নাম দিয়ে শুরু হওয়া এবং kebab-case এ থাকা ক্লাস নেম ব্যবহার করুন। এই নেমিং কনভেনশন আপনার কোডটি সংগঠিত রাখতে এবং সহজে পড়তে সাহায্য করবে।
  উদাহরণস্বরূপ, যদি আপনার Play-এর নাম হয় 'my-play', তাহলে আপনার ক্লাস নাম হতে হবে 'my-play\_\_my-class'

- [scoped styles](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) এবং automatic [vendor prefixing](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) সহ অতিরিক্ত বৈশিষ্ট্য প্রদান করে এমন CSS লাইব্রেরি ব্যবহার করুন।

- ReactPlay তে `Tailwind CSS` সাপোর্ট যুক্ত রয়েছে। আপনি আপনার Play-তে এই CSS লাইব্রেরি ব্যবহার করতে পারেন।

- আপনার কম্পোনেন্টসমূহ স্টাইল করতে CSS মডিউল ব্যবহার করুন। CSS মডিউল আপনাকে মডিউল এবং পুনঃব্যবহার যোগ্য CSS কোড লেখতে সাহায্য করে, যা একটি নির্দিষ্ট কম্পোনেন্টের স্কোপের মধ্যে হয়।
  উদাহরণস্বরূপ, আপনি আপনার কম্পোনেন্টের জন্য একটি CSS মডিউল তৈরি করতে পারেন এই ভাবে:

```css
.my-play__my-class {
  color: red;
}
```

এবং তারপর এটি আপনার কম্পোনেন্টে এভাবে ইম্পোর্ট করুন:

```jsx
import styles from "./MyComponent.module.css";

function MyComponent() {
  return <div className={styles["my-play__my-class"]}>Hello World</div>;
}
```

- `styled-components` ব্যবহার করে পুনর্ব্যবহারযোগ্য এবং যোগদানযোগ্য কম্পোনেন্ট তৈরি করুন। `styled-components` আপনাকে এমন একটি CSS কোড লিখতে দেয় যা একটি নির্দিষ্ট কম্পোনেন্টের স্কোপের মধ্যে হয় এবং আপনার প্রজেক্টের সাথে পুনর্ব্যবহার করা যায়।

## করবেন না

- প্রয়োজন না হলে ইনলাইন স্টাইল ব্যবহার করবেন না। ইনলাইন স্টাইল আপনার কোডটি পড়া এবং সংরক্ষণ করা কঠিন করতে পারে, এবং সে সাথে পারফরম্যান্সে নেতিবাচক প্রভাব ফেলতে পারে। তাই, আপনার কম্পোনেন্টসমূহ স্টাইল করতে CSS ক্লাস ব্যবহার করুন। এই পদ্ধতি আপনার কোডটি সংগঠিত রাখতে সাহায্য করে এবং সংরক্ষণ করা সহজ করে।
  উদাহরণস্বরূপ, এই ভাবে ইনলাইন স্টাইল ব্যবহার না করে:

```jsx
function MyComponent() {
  return <div style={{ color: "red" }}>Hello World</div>;
}
```

আপনি একটি CSS ক্লাস তৈরি করতে পারেন এবং তা আপনার কম্পোনেন্টে এই ভাবে প্রয়োগ করতে পারেন:

```css
.my-play__my-class {
  color: red;
}
```

```jsx
function MyComponent() {
  return <div className="my-play__my-class">Hello World</div>;
}
```

- গ্লোবাল স্টাইল ব্যবহার করবেন না। গ্লোবাল স্টাইল নেমিং সংঘর্ষ সৃষ্টি করতে পারে এবং আপনার কোডটি সংরক্ষণ করা কঠিন করতে পারে। তাই, মডিউল এবং পুনর্ব্যবহারযোগ্য CSS কোড তৈরি করতে CSS মডিউল বা 'styled-components' ব্যবহার করুন।
  For example, you can create a CSS module for your component like this:

```css
.my-play__my-class {
  color: red;
}
```

And then import it into your component like this:

```jsx
import styles from "./MyComponent.module.css";

function MyComponent() {
  return <div className={styles["my-play__my-class"]}>Hello World</div>;
}
```

- Do not override the styles using `!important` CSS property. They override all the other declarations and make the CSS code difficult to maintain and debug. Instead, you can use other options to override styles such as using the source order rule, the inherited property rule, or the specificity rule.

By following these dos and don'ts, you can ensure that your play is well-styled, maintainable, and scalable. Remember to choose the approach that works best for your project and to keep your code organized and easy to read.

## ✋ Need Help?

You can reach out to us at [ReactPlay Twitter Handle | @ReactPlayIO](https://twitter.com/ReactPlayIO) with a DM. Additionally, feel free to join our [Discord community](https://discord.gg/vrTxWUP8Am) for discussions.
