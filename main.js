const {app,BrowserWindow} = require('electron');

const CreateWindow = ()=>{
    const win=new BrowserWindow({
        width:800,
        height:800
    })
    win.loadFile('index.html');
}

app.whenReady().then(CreateWindow);