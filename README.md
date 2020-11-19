# Player Recreation League


## Steps for Pulling the Code From This Repo
1. Click the green button that says **Code**
2. A dropdown menu will appear that gives three options **HTTPS**, **SSH**, **GithubCLI** choose the **HTTPS** option
3. Click the clipboard icon to the right of the *https://* link
4. Open your terminal/CMD Prompt and use the following commands to create a directory to store your code
***If on Windows I recommend Windows Powershell over CMD Prompt***
```bash
cd $home 
mkdir source && cd source && mkdir repos && cd repos
git clone https://github.com/RJMaicki/Players-Recreation-League.git
cd Players-Recreation-League
```

***If on mac***
```bash
cd Desktop
mkdir source && cd source && mkdir repos && repos
git clone https://github.com/RJMaicki/Players-Recreation-League.git
cd Players-Recreation-League
```
That should be all you need to git the code onto your machine from GitHub. Follow the below steps to run the app

## Running the code
Now that we have the code cloned on your machine you can follow the below steps to get the code running on your respective OS
1. Open up Powershell or terminal
2. Navigate to the directory you saved the code to
3. Follow the below steps to run the code for the respective emulator/simulator or web
4. Find the *yarn.lock* file and delete it (unless you have yarn installed then you can leave it and run the yarn commands)
***If you are wanting to run the app on Android make sure you open up Android Studio and start the emulator before trying to run the app***
```bash
npm install 
npm run ios
npm run android
npm run web
```
After running the respective commands you should now have the app displayed on at least one of the three options. If you are on a 
mac then you can run all three at the same time, as long as you have the memory for it of course