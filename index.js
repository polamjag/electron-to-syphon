const {app, BrowserWindow} = require('electron');

app.disableHardwareAcceleration();

let win;
app.once('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      offscreen: true
    }
  });

  win.loadURL('http://github.com')
  win.webContents.on('paint', (event, dirty, image) => {
    // updateBitmap(dirty, image.getBitmap());
    console.log(image.getNativeHandle());
  })

  win.webContents.setFrameRate(30);
})

