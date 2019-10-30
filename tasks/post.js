/**
 * Create a new blog post given a title
 * Usage: node post.js "Blog Post Title" ["Here is an optional blog post description"]
 */

const path = require('path')
const mkdirp = require('mkdirp')
const fs = require('fs')
const template = require('lodash.template')
const args = process.argv.slice(2)
const rspaces = /[\s-]+/g

const postTemplate = template(`---
title: <%- title %>
date: '<%- date %>'<% if(typeof description !== 'undefined') { %>
description: <%- description %>
<% } %>
draft: true
---

`)

function post(title, description) {
  return new Promise((resolve, reject) => {
    const dir = path.join(__dirname, `/../content/blog/${title.replace(rspaces, '-')}`)
    mkdirp(dir, (mkdirErr) => {
      if (mkdirErr) {
        return reject(mkdirErr)
      }
      fs.writeFile(
        path.join(dir, 'index.md'),
        postTemplate({
          title,
          date: new Date().toISOString(),
          description
        }),
        'utf8',
        (fsErr) => {
          if (fsErr) {
            return reject(fsErr)
          }
          resolve()
        }
      )
    })
  }).then(
    () => {
      console.log(`Created post ${title}.`)
    },
    (error) => {
      console.error(error.stack)
      process.exit(1)
    }
  )
}

if (args.length) {
  post(...args)
}
