# How to add styling to your Play

Styling is an essential part of any play, and it's crucial to follow best practices to ensure that your code is maintainable and scalable. Here are some **dos and don'ts** to keep in mind when adding styling to your play:

## Do's

- Use class names that start with the play name and are in the kebab case. This naming convention helps to keep your code organized and easy to read. For example, if your play name is **"my-play"**, your class name should be `my-play__my-class`.
- Use CSS libraries that provide additional features such as scoped styles and automatic vendor prefixing. ReactPlay has been configured to support Tailwind CSS.

- Use CSS modules to style your components. CSS modules allow you to write modular and reusable CSS code that is scoped to a specific component. For example, you can create a CSS module for your component like this:

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

- Use styled-components to create reusable and composable components. Styled components allow you to write CSS code that is scoped to a specific component and can be reused across your project.

## Don'ts

- Do not directly style the elements. Instead, use CSS classes to style your components. This approach helps to keep your code organized and makes it easier to maintain.
- Do not use inline styles unless necessary. Inline styles can make your code harder to read and maintain, and they can also negatively impact performance. For example, instead of using inline styles like this:

```jsx
function MyComponent() {
  return <div style={{ color: "red" }}>Hello World</div>;
}
```

You can create a CSS class and apply it to your component like this:

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

- Do not use global styles. Global styles can cause naming conflicts and make it harder to maintain your code. Instead, use CSS modules or styled-components to create modular and reusable CSS code. For example, you can create a CSS module for your component like this:

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

By following these dos and don'ts, you can ensure that your play is well-styled, maintainable, and scalable. Remember to choose the approach that works best for your project and to keep your code organized and easy to read.

## ✋ Need Help?

You can reach out to us at [ReactPlay Twitter Handle | @ReactPlayIO](https://twitter.com/ReactPlayIO) with a DM. Additionally, feel free to join our [Discord community](https://discord.gg/vrTxWUP8Am) for discussions.
