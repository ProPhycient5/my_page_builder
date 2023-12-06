

## Steps to set up in your local system

### 1. Fisrt get clone of the concerned repo by running following command
    git clone https://github.com/ProPhycient5/my_page_builder.git

### 2. You have to intall npm packages
    npm i


### 3. In the project directory, you can run:
      npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Key considerations to keep in mind when exploring this web app:

#### 1. There are two section of this page builder 
    (i) Canvas - Actaul page where we can create actual page by dropping the required component from right side. 
       It covers 80% of the space.
    (ii) Side Bar - It consists few draggable components like `Button`, `Label` and `Input`. On the top, 
         we have `Export JSON` button to actual export page configuration in JSON pattern.
#### 2. We can drag any component from Side bar(also multiple times) and drop on the Canvas. 
#### 3. While dropping a draggable component, `Edit Modal` pops up to get the some data from the user like 
       `Text`, `Xcoordinate`, `Ycoordinate`, `fontSize` and `fontWeight`
#### 4. If we want to delete any node on the canvas, click that node and hit `Delete` button
#### 5. If we want to update any node with data that is covered in (3), click that node, hit `Enter` button to update so.
#### 6. All nodes on the canvas are persisted to `localStorage`, so it won't vanish until we clear the `localstorage.clear()` explicitely.
#### 7. And lastly if we want to keep backup of the page structure in JSON format, we can use `Export JSON` to do so. 

The following GIF demonstrates how the concerned webapp works

![mini_builder](https://github.com/ProPhycient5/my_page_builder/assets/71059909/6ffca40a-1ae7-4f11-945e-7ce55ec63e56)

