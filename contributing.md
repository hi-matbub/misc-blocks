# Contributing

If you would like to get involed right away feel free to get in touch with me! 

## New Feature Checklist

Before a new feature can be published a new feature we need to verify a few things.
To Summarize:
- Add the code in a new sub directry
- Export from main entry point
- Add test suites
- Create a minimul working demo in TS Playground
- Add a new entry point for the new module in the package.json `export` object.
- Add a readme for the new module. 


## 1. Add the Code

Add the code in a new subdirectory with a descriptive but breif title. See examples of naming conventions in the [./lib](./lib) directory.

- [ ] source should be exported e.g `./lib/my-new-feature/index.ts`
```js
/**
 * @param
 * @returns
 */

module.exports = () => {
  // logic here
};
```

### 1.5 Add to main export in ./lib/index.ts

```js
module.exports = {
  // ...
  myNewFeature: require('./my-new-feature/'),
};

```

## 2. Test the code
We are using Jest to unit test. See examples in the [./test](./test) directory.

- [ ] Include both happy and uphappy test cases. (2 minimum)

## 3. Add a demo version of the code to TS Playground
[![See me](https://shields.io/badge/-See_Me-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHImQnEyaLJwuTMgsDEFonADmLs1tkAC+ANz9O8n7RUNseYXjk9MKiAA2nAxbu-uSMuOQNWhS3bEK1RpaeoZjGYLKF8Jx7E1ugEAEwBADMrSCTThAQArAEACww9q7aSyN4MD7Q75KVR-HT6JhGEzmSzUMEQqHQxGQZFogIAThxEjxnCk1wYFWuUmW9iSRXenwCyUl0PAmyiu3AwGAkG0TCY8GmKuWiiY2hY5Aq0jQwG0ik6aE05ENwDQik4Qk65GFQgA1pxgLNjHbEMpgNdFORgKSVJbNDpnYCTJ0qVJOihrJBlarALwbgGkd5NAA)

## 4. Update the "exports" object within package.json
- [ ] We will need to be able to import as a sub directory. 


## 5. Add a readme for the new function
See [./lib/find-match-between-two-arrays/readme.md](./lib/find-match-between-two-arrays/readme.md) for a full example.

- [ ] readme in subdirectory e.g `./lib/my-new-feature/readme.md` 
  - [ ] should include import as title. e.g `misc-blocks/my-new-feature`
  - [ ] should include link as badge to source code in TypeScript Playground (See also step 3.)
  - [ ] should include link as badge to test suites. 
  - [ ] should contain a breif description of function
  - [ ] should include raw ts code block
  - [ ] should include full scope of use case. 


