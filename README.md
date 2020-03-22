# Summary

Based off of [Gatsby Absurd template](https://www.gatsbyjs.org/starters/ajayns/gatsby-absurd/) from [ajayns](https://github.com/ajayns), this site is designed to simplify the ticketing process for McGill Events such as Faculty Olympics, Carnival, Science Games and Hype Week. This template is designed to handle waivers, consent videos and the ticketing process itself.

There are four main steps that this project aims to consolidate for attendees: 

1. Ensure prospective attendees are on the captain-provided allow list (optional)

2. Require all prospective attendees watch a consent video in it's entirety (optional)

3. Require all prospective attendees complete a waiver.

4. Assuming all of the above conditions have been met, purchase a ticket via an embedded typeform backed by Stripe billing.

# 🚀 Quick start

## Authentication

To set this up for another event, you'll need to setup an [Auth0](https://auth0.com) account and change the tokens in `gatsby-ssr.js` and in `gatsby-browser.js` to new credentials setup for your organization. The authentication is built ontop of [this](https://github.com/Swizec/useAuth#readme) package. It should be possible to change this to instead back onto McGill's OAUTH accounts if the event is going to be exclusively for McGill students and alumni. Authentication in general is required to ensure that only people on the rosters are able to purchase tickets. For events like a hype night power hour this requirement can be waived.

## Customization

Most of the theme information is stored in `src/styles/theme.js` and can be edited there. You can also edit the artwork and image assets in `src/images/art` but note you'll need to update the GraphQL queries in the source code for each page to match.

## Content

The content of the site is defined in `src/pages` with some pages in subfolders for their respective days. You'll note that the pages use some standard components from `src/components`. Ideally these components should be used more throughout the site and more of them should be made but time got the best of me.

## Hosting
To host this site, I would recommend using [Netlify](https://www.netlify.com), their free plan should be plenty sufficient for the needs of most events. It will build automatically when updates are pushed to the `master` branch. You can deploy your own version of the site with this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/krubenok/McGill-Ticketing)

# 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

```bash
🌳  .
├── CODE_OF_CONDUCT.md
├── LICENSE.md
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── netlify.toml
├── package-lock.json
├── package.json
├── scripts
├── src
└── static
```

# 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.