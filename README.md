## Getting Started
#Installing Node.js (use the link below)
```
https://nodejs.org/en/download/package-manager/
```
#If creating a new app in next js use 
```
npx create-next-app name-of-your-app
cd name-of-your-app
```

#If Cloning this repo
```
git clone https://github.com/raheed001/Blog-app/
cd Blog-app
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Have used Material UI for CSS as well as Other trending technologies like bootstrap and tailwind CSS
```
npm install @mui/material @emotion/react @emotion/styled
```
#Material UI uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:
```
npm install @mui/material @mui/styled-engine-sc styled-components
```

#Install Bootstarp
```
npm i bootstrap
```
#Install Step by step 
```
npm install -D tailwindcss
npx tailwindcss init
```
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
#Add the Tailwind directives to your CSS
#Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```
src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Optional
Go to Extentions in vs code and install ES7+ React/Redux/React-Native snippets Extension for faster coding and Tailwind CSS IntelliSense to get automated intelisence when typing tailwind related code
