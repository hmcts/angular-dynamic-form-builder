# AngularFormBuilder

## Development server
The app will automatically reload if you change any of the source files.

## Requirements to deliver
**Linting**
- [x] TypeScript
- [x] Official Angular style guide
- [x] Inject GOV Design system SCSS

**Form Builder implementation**
- [x] Merge form builder from JUI and PUI apps.
- [x] POF of consuming form builder with/without wrapper

**Documentation**
- [x] add a README.md section about form-builder use
- [x] add a README.md section about building and deploying to NPM
- [x] add a README.md section about building and deploying to GIT
- [ ] automated change log
- [ ] automatically generated docs for Angular components/services/...
- [x] demo app showing Form builder working
- [ ] Make sure unit tests are provided
- [x] How to extend the form-builder

## Form builder demo
Run `npm start` and navigate to `http://localhost:6666/` to view the demo app showcasing all form builder implementation
example.
### How to use form builder
```angular2html
<app-form-builder
  [pageItems]="pageItems"
  [pageValues]="pageValues"
  [isPageValid]="isPageValid"
  (submitPage)="onContinue($event)" >
</app-form-builder>
```

## Form Builder Inputs & Interface
``pageValues: Array<any>``
PageValues is the meta data. Here is an example of  meta:
```angular2html
    {
    idPrefix: 'tbc',
    name: 'organisation-name',
    header: "What's the name of your organisation?",
    formGroupValidators: [],
    'validationHeaderErrorMessages': [
      {
        validationLevel: 'formControl',
        controlId: 'orgName',
        text: 'Enter organisation name',
        href: '/register/organisation-name'
      }
    ],
    groups: [
        {
            hiddenInput: {
                control: 'nextUrl',
                value: 'organisation-address',
            },
        },
      {
        input: {
          label: {
            text: '',
            classes: 'govuk-label--m'
          },
          validators: ['required'],
          validationError: {
            value: 'Enter Organisation Name',
            controlId: 'orgName'
          },
          control: 'orgName',
          classes: ''
        },
      },
        {
            button: {
                control: 'createButton',
                value: 'Continue',
                type: 'submit',
                classes: '',
                onEvent: 'continue',
            },
        },
    ],
    }
```

``pageItems: Object``
PageItems as default is empty, as form should not be pre-filled.
This is the user form input data.

### File structure
```
-projects/hmcts-form-builder
--src
---lib
----components
----services
---...module.ts
---...routing.ts
--public_api.ts
```
### How to extend form builder
Create components, services, directives under the hmcts-form-builder module. 
Once a component is created, you need to add in the module.ts `declartions` and `exports`
and for it to be exported and used in other apps you need also export in `public_api.ts`.

## Form Builder Inputs & Interface
``pageValues: Array<any>``
PageValues is the meta data. Here is an example of  meta:
```angular2html
    {
    idPrefix: 'tbc',
    name: 'organisation-name',
    header: "What's the name of your organisation?",
    formGroupValidators: [],
    'validationHeaderErrorMessages': [
      {
        validationLevel: 'formControl',
        controlId: 'orgName',
        text: 'Enter organisation name',
        href: '/register/organisation-name'
      }
    ],
    groups: [
        {
            hiddenInput: {
                control: 'nextUrl',
                value: 'organisation-address',
            },
        },
      {
        input: {
          label: {
            text: '',
            classes: 'govuk-label--m'
          },
          validators: ['required'],
          validationError: {
            value: 'Enter Organisation Name',
            controlId: 'orgName'
          },
          control: 'orgName',
          classes: ''
        },
      },
        {
            button: {
                control: 'createButton',
                value: 'Continue',
                type: 'submit',
                classes: '',
                onEvent: 'continue',
            },
        },
    ],
    }
```

``pageItems: Object``
PageItems as default is empty, as form should not be pre-filled.
This is the user form input data.

### File structureg
-projects/hmcts-form-builder
--src
---lib
----components
----services
---...module.ts
---...routing.ts
--public_api.ts

### How to extend form builder
Create components, services, directives under the hmcts-form-builder module. 
Once a component is created, you need to add in the module.ts `declartions` and `exports`
and for it to be exported and used in other apps you need also export in `public_api.ts`.

### Form builder code coverage
Current coverage is same and migrate from the apps. They need to be fixed and improved.

### Step to publish to NPM
0. For now manually you can update the package.json version in ``projects/hmcts-form-builder/package.json``
1. To generate/update the module you need to run ``npm run npm:form-builder``
2. Login into the corporate NPM package
3. Publish the NPM using ``npm run npm:publish``

### Step to publish to Github
0. For now manually you can update the package.json version in ``projects/hmcts-form-builder/package.json``
1. To generate/update the module you need to run ``npm run npm:form-builder``
2. Login into the corporate NPM package
3. Publish the NPM using ``npm run npm:publish``

