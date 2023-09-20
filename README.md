# string.248.no

This is the project files for [string.248.no](https://string.248.no), a static string analyzer on the web.

[![screenshot](https://user-images.githubusercontent.com/1774972/221312241-d516d389-4e5a-4155-812e-9449dbca88ea.png)](https://string.248.no)

## Examples

- [Emoji](https://string.248.no/?s=%F0%9F%92%A9%20%F0%9F%91%8D%20%F0%9F%91%8D%F0%9F%8F%BE%20%F0%9F%87%B3%F0%9F%87%B4%20%F0%9F%87%B8%F0%9F%87%AF%20%F0%9F%91%A8%E2%80%8D%F0%9F%91%A9%E2%80%8D%F0%9F%91%A7%E2%80%8D%F0%9F%91%A6%20%F0%9F%95%B4)
- [Base64 encoded string](https://string.248.no/?s=c3RyaW5nLjI0OC5ubw==)
- [Obscure Unicode characters](https://string.248.no/?s=%EF%B7%BD%20%E1%84%80%E1%84%80%E1%84%80%EA%B0%81%E1%86%A8%E1%86%A8%20m%CC%B4%CC%82%CC%87%CD%9D%CD%89%CC%98%CC%ACZ%CD%91%CD%AB%CD%83%CD%AA%CC%82%CD%AB%CC%BD%CD%8F%CC%B4%CC%99%CC%A4%CC%9E%CD%89%CD%9A%CC%AF%CC%9E%CC%A0%CD%8D)
- [Shrugface](https://string.248.no/?s=%C2%AF%5C_(%E3%83%84)_/%C2%AF)

## Installation

The website is avaliable at [string.248.no](https://string.248.no), but if you want to run the website on you own, clone the repo with submodules by running

```
git clone --recursive --shallow-submodules https://github.com/rosvik/string.248.no.git
```

The site is just vanilla JS, so all you have to do is to open `index.html` in your favorite browser, and enjoy ✨

## Deployment

A new production deployment is done on every commit to master, and a preview build on any other branch. To depoy a preview build manually, install and authenticate [`wrangler`](https://developers.cloudflare.com/workers/wrangler/install-and-update/), then run

```
wrangler pages publish . --project-name=string-248-no
```

Your preview URL should then be printed to the console 🚀

## Submodules

* [tiny-hashes](https://github.com/jbt/tiny-hashes) - Tiny JavaScript Hash Functions
* [jsSHA](https://github.com/Caligatio/jsSHA) - A pure JS SHA implementation

<div align="right"><img src="public/favicon.svg" width="32" alt="248"></div>
