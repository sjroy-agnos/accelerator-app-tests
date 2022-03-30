## accelerator-app-tests
Automation framework for Patient-App (accelerator-app)

## Technologies and tools

- JavaScript
- NodeJS
- Cypress
- Mocha & Chai - Testing Framework
- Page Object Model - Design Pattern

## Cypress set up
Operating System
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above (64-bit only)

# Node.js
- Node.js 12 or 14 and above

# Install Cypress via npm:
- cd /project/path
- npm install cypress --save-dev

# Install Cypress via yarn:
- cd /project/path
- yarn add cypress --dev

# Opening Cypress
- ./node_modules/.bin/cypress open (The long way with the full path)
- $(npm bin)/cypress open (Or with the shortcut using npm bin)
- npx cypress open (Or by using npx)
- yarn run cypress open (Or by using yarn)

## Adding npm scripts
- package.json
  {
    "scripts": {
    "cypress:open": "cypress open"
    }
  }      
- npm run cypress:open