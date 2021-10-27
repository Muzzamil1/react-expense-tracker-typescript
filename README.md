# Expense Tracker

Expense tracker helps you to keep an accurate record of your money inflow and outflow.
## Demo

#### Live Link
https://react-expense-tracker-typescript.surge.sh

#### Gif
![alt text](https://github.com/Muzzamil1/react-expense-tracker-typescript/blob/main/demo/demo.gif?raw=true)

## Tech Stack

- React
- Typescript
- Material UI 5
- React hooks
- React Context API
  
## Features

- Adding new transaction
- Deleting an existing transaction
- Dynamically calculating Net balance, Total In (income) and Total Out (expense)
- Update any existing transaction
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/Muzzamil1/react-expense-tracker-typescript.git
```

Go to the project directory

```bash
  cd react-expense-tracker-typescript
```

Install dependencies and dev dependencies

```bash
  yarn install
```

To install only dependencies without dev dependencies and without generating yarn.lock file

```bash
  yarn install --production --frozen-lockfile
```

Start the server

```bash
  yarn start
```

  # Deploying a React app with Surge (from Create React App format)

## Deploy from local

**1. Make sure you have surge installed globally**

- `npm install -g surge` or `yarn global add surge`

**2. Run the Create React App build**

- `cd your-react-project`
- `yarn build`

**3. Change into build directory**

- `cd build`

**4. Run surge**
 
 - `surge`
 - Log in with your email and password, hit enter
 - Enter the correct path to your project, hit enter
 - Change the url to your custom url or use the default, hit enter
 - Surge will run deploy

### Adding deploy script to package.json

- In package.json under "scripts" add this line:
- `"deploy": "yarn build && surge ./build/ your-surge-url.surge.sh"`
- Update `your-surge-url` with your url
- `yarn deploy` (this will need to be run from your project root, not the build directory!)

## Deploy from GitHub Action

**1. Make sure you have surge installed globally**

- `npm install -g surge` or `yarn global add surge`


**2. Get Surge Token**
 - `surge token`

 **3. Add Token in GitHub repository**
  - GitHub repository > Settings > Secrets 
  - Click 'New repository secret'
  - Give this secret a name and copy that name. Add the token in 'Value' input box

 **3. Add secret in workflow**
 - Replace 'SURGE_TOKEN' with your secret name on this line --  https://github.com/Muzzamil1/react-expense-tracker-typescript/blob/cd84b8a8d8ec1db8f6cefcc08239920f37a97f98/.github/workflows/auto_deploy.yml#L49
## License

[MIT](https://choosealicense.com/licenses/mit/)

