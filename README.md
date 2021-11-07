![Screenshot from 2021-11-08 00-00-08](https://user-images.githubusercontent.com/53997042/140657354-ba206c44-89f0-4ac6-8589-a0ffa7f6a27b.png)
![Screenshot from 2021-11-07 23-59-00](https://user-images.githubusercontent.com/53997042/140657360-d10743c4-afe9-49e1-a883-d78b74cf0678.png)
![Screenshot from 2021-11-07 23-58-40](https://user-images.githubusercontent.com/53997042/140657362-d5b9a44a-15d8-4e5c-a09a-d1b49d2ed9dc.png)
![Screenshot from 2021-11-07 23-58-34](https://user-images.githubusercontent.com/53997042/140657366-72ab43dd-1117-4d1c-8bce-c275abf0dac3.png)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Fake Server`
mockApi server

### `Add Operation`
it opens a page with the comment button to add the commnet in the comment read box.
Click on the commentbutton and write the comment .It will add comment to server.

### `Read Operation `
Now ,refresh the page the comment we added to server will be visible on the screen with other comment.

### `Update Operation`
Click on the update button .OnClicked Update Button will open comment box to write new comment.After updation click update post button.
Once Update Post button clicked the new comment updates old comment in the server.And now refresh the page then you will see updated comment in the read section.

### `Delete Operation`
Click on delete button.And it will Delete that comment from box.

### `Why needed to refresh page after Add and Update operation?`
Because I rendered component in the component.So it does not refresh the whole page.It can be solved by using router.But in this project i did not used router.
