# Upgrade project C:\Projets\SPFx-react-image-magnifier to v1.7.1

Date: 2019-1-10

## Findings

Following is the list of steps required to upgrade your project to SharePoint Framework version 1.7.1. [Summary](#Summary) of the modifications is included at the end of the report.

### FN001001 @microsoft/sp-core-library | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-core-library

Execute the following command:

```sh
npm i @microsoft/sp-core-library@1.7.1 -SE
```

File: [./package.json](./package.json)

### FN001004 @microsoft/sp-webpart-base | Required

Upgrade SharePoint Framework dependency package @microsoft/sp-webpart-base

Execute the following command:

```sh
npm i @microsoft/sp-webpart-base@1.7.1 -SE
```

File: [./package.json](./package.json)

### FN002001 @microsoft/sp-build-web | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-build-web

Execute the following command:

```sh
npm i @microsoft/sp-build-web@1.7.1 -DE
```

File: [./package.json](./package.json)

### FN002002 @microsoft/sp-module-interfaces | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-module-interfaces

Execute the following command:

```sh
npm i @microsoft/sp-module-interfaces@1.7.1 -DE
```

File: [./package.json](./package.json)

### FN002003 @microsoft/sp-webpart-workbench | Required

Upgrade SharePoint Framework dev dependency package @microsoft/sp-webpart-workbench

Execute the following command:

```sh
npm i @microsoft/sp-webpart-workbench@1.7.1 -DE
```

File: [./package.json](./package.json)

### FN010001 .yo-rc.json version | Recommended

Update version in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.7.1"
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN001005 @types/react | Required

Upgrade SharePoint Framework dependency package @types/react

Execute the following command:

```sh
npm i @types/react@16.4.2 -SE
```

File: [./package.json](./package.json)

### FN001006 @types/react-dom | Required

Upgrade SharePoint Framework dependency package @types/react-dom

Execute the following command:

```sh
npm i @types/react-dom@16.0.5 -SE
```

File: [./package.json](./package.json)

### FN001008 react | Required

Upgrade SharePoint Framework dependency package react

Execute the following command:

```sh
npm i react@16.3.2 -SE
```

File: [./package.json](./package.json)

### FN001009 react-dom | Required

Upgrade SharePoint Framework dependency package react-dom

Execute the following command:

```sh
npm i react-dom@16.3.2 -SE
```

File: [./package.json](./package.json)

### FN006003 package-solution.json isDomainIsolated | Required

Update package-solution.json isDomainIsolated

In file [./config/package-solution.json](./config/package-solution.json) update the code as follows:

```json
{
  "solution": {
    "isDomainIsolated": false
  }
}
```

File: [./config/package-solution.json](./config/package-solution.json)

### FN010007 .yo-rc.json isDomainIsolated | Recommended

Update isDomainIsolated in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "isDomainIsolated": false
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN018001 Web part Microsoft Teams tab resources folder | Optional

Create folder for Microsoft Teams tab resources

Execute the following command:

```sh
mkdir C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier
```

File: [teams_imageMagnifier](teams_imageMagnifier)

### FN018002 Web part Microsoft Teams tab manifest | Optional

Create Microsoft Teams tab manifest for the web part

Execute the following command:

```sh
cat > C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\manifest.json << EOF
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.2/MicrosoftTeams.schema.json",
  "manifestVersion": "1.2",
  "packageName": "ImageMagnifier",
  "id": "307ecced-b9a6-4b72-bc02-4d7ea558345a",
  "version": "0.1",
  "developer": {
    "name": "SPFx + Teams Dev",
    "websiteUrl": "https://products.office.com/en-us/sharepoint/collaboration",
    "privacyUrl": "https://privacy.microsoft.com/en-us/privacystatement",
    "termsOfUseUrl": "https://www.microsoft.com/en-us/servicesagreement"
  },
  "name": {
    "short": "ImageMagnifier"
  },
  "description": {
    "short": "Magnify the image",
    "full": "Magnify the image"
  },
  "icons": {
    "outline": "tab20x20.png",
    "color": "tab96x96.png"
  },
  "accentColor": "#004578",
  "configurableTabs": [
    {
      "configurationUrl": "https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId=307ecced-b9a6-4b72-bc02-4d7ea558345a",
      "canUpdateConfiguration": true,
      "scopes": [
        "team"
      ]
    }
  ],
  "validDomains": [
    "*.login.microsoftonline.com",
    "*.sharepoint.com",
    "*.sharepoint-df.com",
    "spoppe-a.akamaihd.net",
    "spoprod-a.akamaihd.net",
    "resourceseng.blob.core.windows.net",
    "msft.spoppe.com"
  ],
  "webApplicationInfo": {
    "resource": "https://{teamSiteDomain}",
    "id": "00000003-0000-0ff1-ce00-000000000000"
  }
}
EOF
```

File: [teams_imageMagnifier\manifest.json](teams_imageMagnifier\manifest.json)

### FN018003 Web part Microsoft Teams tab small icon | Optional

Create Microsoft Teams tab small icon for the web part

Execute the following command:

```sh
cp C:\Users\fcati\AppData\Roaming\npm\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\tab20x20.png
```

File: [teams_imageMagnifier\tab20x20.png](teams_imageMagnifier\tab20x20.png)

### FN018004 Web part Microsoft Teams tab large icon | Optional

Create Microsoft Teams tab large icon for the web part

Execute the following command:

```sh
cp C:\Users\fcati\AppData\Roaming\npm\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\tab96x96.png
```

File: [teams_imageMagnifier\tab96x96.png](teams_imageMagnifier\tab96x96.png)

### FN002008 tslint-microsoft-contrib | Required

Install SharePoint Framework dev dependency package tslint-microsoft-contrib

Execute the following command:

```sh
npm i tslint-microsoft-contrib@5.0.0 -DE
```

File: [./package.json](./package.json)

### FN012011 tsconfig.json compiler options outDir | Required

Update tsconfig.json outDir value

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "outDir": "lib"
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012012 tsconfig.json include property | Required

Update tsconfig.json include property

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "include": [
    "src/**/*.ts"
  ]
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012013 tsconfig.json exclude property | Required

Update tsconfig.json exclude property

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "exclude": [
    "node_modules",
    "lib"
  ]
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN015003 ./tslint.json | Required

Add file ./tslint.json

Execute the following command:

```sh
cat > ./tslint.json << EOF
{
  "rulesDirectory": [
    "tslint-microsoft-contrib"
  ],
  "rules": {
    "class-name": false,
    "export-name": false,
    "forin": false,
    "label-position": false,
    "member-access": true,
    "no-arg": false,
    "no-console": false,
    "no-construct": false,
    "no-duplicate-variable": true,
    "no-eval": false,
    "no-function-expression": true,
    "no-internal-module": true,
    "no-shadowed-variable": true,
    "no-switch-case-fall-through": true,
    "no-unnecessary-semicolons": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-with-statement": true,
    "semicolon": true,
    "trailing-comma": false,
    "typedef": false,
    "typedef-whitespace": false,
    "use-named-parameter": true,
    "variable-name": false,
    "whitespace": false
  }
}
EOF
```

File: [./tslint.json](./tslint.json)

### FN015004 ./config/tslint.json | Required

Remove file ./config/tslint.json

Execute the following command:

```sh
rm ./config/tslint.json
```

File: [./config/tslint.json](./config/tslint.json)

### FN015005 ./src/index.ts | Required

Add file ./src/index.ts

Execute the following command:

```sh
cat > ./src/index.ts << EOF
// A file is required to be in the root of the /src directory by the TypeScript compiler

EOF
```

File: [./src/index.ts](./src/index.ts)

### FN001007 @types/webpack-env | Required

Upgrade SharePoint Framework dependency package @types/webpack-env

Execute the following command:

```sh
npm i @types/webpack-env@1.13.1 -SE
```

File: [./package.json](./package.json)

### FN001010 @types/es6-promise | Required

Install SharePoint Framework dependency package @types/es6-promise

Execute the following command:

```sh
npm i @types/es6-promise@0.0.33 -SE
```

File: [./package.json](./package.json)

### FN002005 @types/chai | Required

Upgrade SharePoint Framework dev dependency package @types/chai

Execute the following command:

```sh
npm i @types/chai@3.4.34 -DE
```

File: [./package.json](./package.json)

### FN002006 @types/mocha | Required

Upgrade SharePoint Framework dev dependency package @types/mocha

Execute the following command:

```sh
npm i @types/mocha@2.2.38 -DE
```

File: [./package.json](./package.json)

### FN003001 config.json schema | Required

Update config.json schema URL

In file [./config/config.json](./config/config.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/config.2.0.schema.json"
}
```

File: [./config/config.json](./config/config.json)

### FN004001 copy-assets.json schema | Required

Update copy-assets.json schema URL

In file [./config/copy-assets.json](./config/copy-assets.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/copy-assets.schema.json"
}
```

File: [./config/copy-assets.json](./config/copy-assets.json)

### FN005001 deploy-azure-storage.json schema | Required

Update deploy-azure-storage.json schema URL

In file [./config/deploy-azure-storage.json](./config/deploy-azure-storage.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/deploy-azure-storage.schema.json"
}
```

File: [./config/deploy-azure-storage.json](./config/deploy-azure-storage.json)

### FN006001 package-solution.json schema | Required

Update package-solution.json schema URL

In file [./config/package-solution.json](./config/package-solution.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json"
}
```

File: [./config/package-solution.json](./config/package-solution.json)

### FN007001 serve.json schema | Required

Update serve.json schema URL

In file [./config/serve.json](./config/serve.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json"
}
```

File: [./config/serve.json](./config/serve.json)

### FN008001 tslint.json schema | Required

Update tslint.json schema URL

In file [./config/tslint.json](./config/tslint.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/tslint.schema.json"
}
```

File: [./config/tslint.json](./config/tslint.json)

### FN009001 write-manifests.json schema | Required

Update write-manifests.json schema URL

In file [./config/write-manifests.json](./config/write-manifests.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/write-manifests.schema.json"
}
```

File: [./config/write-manifests.json](./config/write-manifests.json)

### FN010002 .yo-rc.json isCreatingSolution | Recommended

Update isCreatingSolution in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "isCreatingSolution": true
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN010003 .yo-rc.json packageManager | Recommended

Update packageManager in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "packageManager": "npm"
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN010004 .yo-rc.json componentType | Recommended

Update componentType in .yo-rc.json

In file [./.yo-rc.json](./.yo-rc.json) update the code as follows:

```json
{
  "@microsoft/generator-sharepoint": {
    "componentType": "webpart"
  }
}
```

File: [./.yo-rc.json](./.yo-rc.json)

### FN011001 Web part manifest schema | Required

Update schema in manifest

In file [src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json](src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json) update the code as follows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json"
}
```

File: [src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json](src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json)

### FN012001 tsconfig.json module | Required

Update module type in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "module": "esnext"
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012002 tsconfig.json moduleResolution | Required

Update moduleResolution in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN001015 @types/react-addons-shallow-compare | Required

Remove SharePoint Framework dependency package @types/react-addons-shallow-compare

Execute the following command:

```sh
npm un @types/react-addons-shallow-compare -S
```

File: [./package.json](./package.json)

### FN001016 @types/react-addons-update | Required

Remove SharePoint Framework dependency package @types/react-addons-update

Execute the following command:

```sh
npm un @types/react-addons-update -S
```

File: [./package.json](./package.json)

### FN001017 @types/react-addons-test-utils | Required

Remove SharePoint Framework dependency package @types/react-addons-test-utils

Execute the following command:

```sh
npm un @types/react-addons-test-utils -S
```

File: [./package.json](./package.json)

### FN006002 package-solution.json includeClientSideAssets | Required

Update package-solution.json includeClientSideAssets

In file [./config/package-solution.json](./config/package-solution.json) update the code as follows:

```json
{
  "solution": {
    "includeClientSideAssets": true
  }
}
```

File: [./config/package-solution.json](./config/package-solution.json)

### FN012003 tsconfig.json skipLibCheck | Required

Update skipLibCheck in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012004 tsconfig.json typeRoots ./node_modules/@types | Required

Add ./node_modules/@types to typeRoots in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012005 tsconfig.json typeRoots ./node_modules/@microsoft | Required

Add ./node_modules/@microsoft to typeRoots in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@microsoft"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012006 tsconfig.json es6-collections types | Required

Remove es6-collections type in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "types": [
      "es6-collections"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012007 tsconfig.json es5 lib | Required

Add es5 lib in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "lib": [
      "es5"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012008 tsconfig.json dom lib | Required

Add dom lib in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "lib": [
      "dom"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN012009 tsconfig.json es2015.collection lib | Required

Add es2015.collection lib in tsconfig.json

In file [./tsconfig.json](./tsconfig.json) update the code as follows:

```json
{
  "compilerOptions": {
    "lib": [
      "es2015.collection"
    ]
  }
}
```

File: [./tsconfig.json](./tsconfig.json)

### FN013001 gulpfile.js ms-Grid sass suppression | Recommended

Add suppression for ms-Grid sass warning

In file [./gulpfile.js](./gulpfile.js) update the code as follows:

```js
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
```

File: [./gulpfile.js](./gulpfile.js)

### FN014001 json.schemas in .vscode/settings.json | Required

Remove json.schemas in .vscode/settings.json

In file [.vscode/settings.json](.vscode/settings.json) update the code as follows:

```json
{
  "json.schemas": []
}
```

File: [.vscode/settings.json](.vscode/settings.json)

### FN002007 ajv | Required

Install SharePoint Framework dev dependency package ajv

Execute the following command:

```sh
npm i ajv@5.2.2 -DE
```

File: [./package.json](./package.json)

### FN014002 .vscode/extensions.json | Recommended

In the .vscode folder, add the extensions.json file

In file [.vscode/extensions.json](.vscode/extensions.json) update the code as follows:

```json
{
  "recommendations": [
    "msjsdiag.debugger-for-chrome"
  ]
}
```

File: [.vscode/extensions.json](.vscode/extensions.json)

### FN014003 .vscode/launch.json | Recommended

In the .vscode folder, add the launch.json file

In file [.vscode/launch.json](.vscode/launch.json) update the code as follows:

```json
{
  /**
    Install Chrome Debugger Extension for Visual Studio Code
    to debug your components with the Chrome browser:
    https://aka.ms/spfx-debugger-extensions
    */
  "version": "0.2.0",
  "configurations": [{
      "name": "Local workbench",
      "type": "chrome",
      "request": "launch",
      "url": "https://localhost:4321/temp/workbench.html",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222"
      ]
    },
    {
      "name": "Hosted workbench",
      "type": "chrome",
      "request": "launch",
      "url": "https://enter-your-SharePoint-site/_layouts/workbench.aspx",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "-incognito"
      ]
    }
  ]
}
```

File: [.vscode/launch.json](.vscode/launch.json)

### FN011005 Web part manifest default group | Required

In the manifest update the default group value

In file [src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json](src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json) update the code as follows:

```json
{
  "preconfiguredEntries": [{
    "group": { "default": "Other" }
  }]
}
```

File: [src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json](src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json)

### FN017001 Run npm dedupe | Optional

If, after upgrading npm packages, when building the project you have errors similar to: "error TS2345: Argument of type 'SPHttpClientConfiguration' is not assignable to parameter of type 'SPHttpClientConfiguration'", try running 'npm dedupe' to cleanup npm packages.

Execute the following command:

```sh
npm dedupe
```

File: [./package.json](./package.json)

## Summary

### Execute script

```sh
npm i @microsoft/sp-core-library@1.7.1 @microsoft/sp-webpart-base@1.7.1 @types/react@16.4.2 @types/react-dom@16.0.5 react@16.3.2 react-dom@16.3.2 @types/webpack-env@1.13.1 @types/es6-promise@0.0.33 -SE
npm i @microsoft/sp-build-web@1.7.1 @microsoft/sp-module-interfaces@1.7.1 @microsoft/sp-webpart-workbench@1.7.1 tslint-microsoft-contrib@5.0.0 @types/chai@3.4.34 @types/mocha@2.2.38 ajv@5.2.2 -DE
npm un @types/react-addons-shallow-compare @types/react-addons-update @types/react-addons-test-utils -S
mkdir C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier
cat > C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\manifest.json << EOF
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.2/MicrosoftTeams.schema.json",
  "manifestVersion": "1.2",
  "packageName": "ImageMagnifier",
  "id": "307ecced-b9a6-4b72-bc02-4d7ea558345a",
  "version": "0.1",
  "developer": {
    "name": "SPFx + Teams Dev",
    "websiteUrl": "https://products.office.com/en-us/sharepoint/collaboration",
    "privacyUrl": "https://privacy.microsoft.com/en-us/privacystatement",
    "termsOfUseUrl": "https://www.microsoft.com/en-us/servicesagreement"
  },
  "name": {
    "short": "ImageMagnifier"
  },
  "description": {
    "short": "Magnify the image",
    "full": "Magnify the image"
  },
  "icons": {
    "outline": "tab20x20.png",
    "color": "tab96x96.png"
  },
  "accentColor": "#004578",
  "configurableTabs": [
    {
      "configurationUrl": "https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId=307ecced-b9a6-4b72-bc02-4d7ea558345a",
      "canUpdateConfiguration": true,
      "scopes": [
        "team"
      ]
    }
  ],
  "validDomains": [
    "*.login.microsoftonline.com",
    "*.sharepoint.com",
    "*.sharepoint-df.com",
    "spoppe-a.akamaihd.net",
    "spoprod-a.akamaihd.net",
    "resourceseng.blob.core.windows.net",
    "msft.spoppe.com"
  ],
  "webApplicationInfo": {
    "resource": "https://{teamSiteDomain}",
    "id": "00000003-0000-0ff1-ce00-000000000000"
  }
}
EOF
cp C:\Users\fcati\AppData\Roaming\npm\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab20x20.png C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\tab20x20.png
cp C:\Users\fcati\AppData\Roaming\npm\node_modules\@pnp\office365-cli\dist\o365\spfx\commands\project\project-upgrade\assets\tab96x96.png C:\Projets\SPFx-react-image-magnifier\teams_imageMagnifier\tab96x96.png
cat > ./tslint.json << EOF
{
  "rulesDirectory": [
    "tslint-microsoft-contrib"
  ],
  "rules": {
    "class-name": false,
    "export-name": false,
    "forin": false,
    "label-position": false,
    "member-access": true,
    "no-arg": false,
    "no-console": false,
    "no-construct": false,
    "no-duplicate-variable": true,
    "no-eval": false,
    "no-function-expression": true,
    "no-internal-module": true,
    "no-shadowed-variable": true,
    "no-switch-case-fall-through": true,
    "no-unnecessary-semicolons": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-with-statement": true,
    "semicolon": true,
    "trailing-comma": false,
    "typedef": false,
    "typedef-whitespace": false,
    "use-named-parameter": true,
    "variable-name": false,
    "whitespace": false
  }
}
EOF
rm ./config/tslint.json
cat > ./src/index.ts << EOF
// A file is required to be in the root of the /src directory by the TypeScript compiler

EOF
npm dedupe
```

### Modify files

#### [./.yo-rc.json](./.yo-rc.json)

Update version in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "version": "1.7.1"
  }
}
```

Update isDomainIsolated in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "isDomainIsolated": false
  }
}
```

Update isCreatingSolution in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "isCreatingSolution": true
  }
}
```

Update packageManager in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "packageManager": "npm"
  }
}
```

Update componentType in .yo-rc.json:

```json
{
  "@microsoft/generator-sharepoint": {
    "componentType": "webpart"
  }
}
```

#### [./config/package-solution.json](./config/package-solution.json)

Update package-solution.json isDomainIsolated:

```json
{
  "solution": {
    "isDomainIsolated": false
  }
}
```

Update package-solution.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json"
}
```

Update package-solution.json includeClientSideAssets:

```json
{
  "solution": {
    "includeClientSideAssets": true
  }
}
```

#### [./tsconfig.json](./tsconfig.json)

Update tsconfig.json outDir value:

```json
{
  "compilerOptions": {
    "outDir": "lib"
  }
}
```

Update tsconfig.json include property:

```json
{
  "include": [
    "src/**/*.ts"
  ]
}
```

Update tsconfig.json exclude property:

```json
{
  "exclude": [
    "node_modules",
    "lib"
  ]
}
```

Update module type in tsconfig.json:

```json
{
  "compilerOptions": {
    "module": "esnext"
  }
}
```

Update moduleResolution in tsconfig.json:

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

Update skipLibCheck in tsconfig.json:

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

Add ./node_modules/@types to typeRoots in tsconfig.json:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types"
    ]
  }
}
```

Add ./node_modules/@microsoft to typeRoots in tsconfig.json:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@microsoft"
    ]
  }
}
```

Remove es6-collections type in tsconfig.json:

```json
{
  "compilerOptions": {
    "types": [
      "es6-collections"
    ]
  }
}
```

Add es5 lib in tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": [
      "es5"
    ]
  }
}
```

Add dom lib in tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": [
      "dom"
    ]
  }
}
```

Add es2015.collection lib in tsconfig.json:

```json
{
  "compilerOptions": {
    "lib": [
      "es2015.collection"
    ]
  }
}
```

#### [./config/config.json](./config/config.json)

Update config.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/config.2.0.schema.json"
}
```

#### [./config/copy-assets.json](./config/copy-assets.json)

Update copy-assets.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/copy-assets.schema.json"
}
```

#### [./config/deploy-azure-storage.json](./config/deploy-azure-storage.json)

Update deploy-azure-storage.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/deploy-azure-storage.schema.json"
}
```

#### [./config/serve.json](./config/serve.json)

Update serve.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json"
}
```

#### [./config/tslint.json](./config/tslint.json)

Update tslint.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/core-build/tslint.schema.json"
}
```

#### [./config/write-manifests.json](./config/write-manifests.json)

Update write-manifests.json schema URL:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/write-manifests.schema.json"
}
```

#### [src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json](src\webparts\imageMagnifier\ImageMagnifierWebPart.manifest.json)

Update schema in manifest:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json"
}
```

In the manifest update the default group value:

```json
{
  "preconfiguredEntries": [{
    "group": { "default": "Other" }
  }]
}
```

#### [./gulpfile.js](./gulpfile.js)

Add suppression for ms-Grid sass warning:

```js
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
```

#### [.vscode/settings.json](.vscode/settings.json)

Remove json.schemas in .vscode/settings.json:

```json
{
  "json.schemas": []
}
```

#### [.vscode/extensions.json](.vscode/extensions.json)

In the .vscode folder, add the extensions.json file:

```json
{
  "recommendations": [
    "msjsdiag.debugger-for-chrome"
  ]
}
```

#### [.vscode/launch.json](.vscode/launch.json)

In the .vscode folder, add the launch.json file:

```json
{
  /**
    Install Chrome Debugger Extension for Visual Studio Code
    to debug your components with the Chrome browser:
    https://aka.ms/spfx-debugger-extensions
    */
  "version": "0.2.0",
  "configurations": [{
      "name": "Local workbench",
      "type": "chrome",
      "request": "launch",
      "url": "https://localhost:4321/temp/workbench.html",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222"
      ]
    },
    {
      "name": "Hosted workbench",
      "type": "chrome",
      "request": "launch",
      "url": "https://enter-your-SharePoint-site/_layouts/workbench.aspx",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "-incognito"
      ]
    }
  ]
}
```
