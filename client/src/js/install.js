const butInstall = document.getElementById('buttonInstall');


let deferredPrompt;


window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  deferredPrompt = event;

  
  butInstall.style.display = 'block';
});


butInstall.addEventListener('click', async () => {

  if (deferredPrompt) {
  
    deferredPrompt.prompt();

    
    const userChoice = await deferredPrompt.userChoice;

    
    if (userChoice.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User dismissed the PWA installation');
    }

    
    deferredPrompt = null;

    
    butInstall.style.display = 'none';
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
  
});
