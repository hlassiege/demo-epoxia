---
id: "11"
title: "About"
description: "About this theme."
date: "2024-02-11"
listed: false
nocomments: true
---

# About this theme

Epoxia is a theme for the blogging platform [Bloggrify](https://bloggrify.com).
If you want to use it, you should start by the [getting started guide](https://bloggrify.com/introduction/introduction).

## Configuration

On top of the [standard configuration](https://bloggrify.com/introduction/configuration), you can add the following options to your app.config.ts file:



| **Key**              | **Type**  | **Default** | **Description**                                    |
|----------------------|-----------|-------------|----------------------------------------------------|
| `dark_mode_selector_hide` | `boolean` | false       | true if you want to disable the dark mode selector |



## Dark mode 

You can hide the dark mode selector by setting the `dark_mode_selector_hide` to `true` in the `app.config.ts` file.

But you may want to force the dark mode for all your users. You can do that by setting a `class` to `dark` in the `nuxt.config.ts` file.

```typescript
    app: {
    head: {
        htmlAttrs: {
            class : "dark"
        }
    }
```
