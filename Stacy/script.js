// simple image placeholders: if images not provided, use gradient placeholders
    document.querySelectorAll('img').forEach(img=>{
      if(!img.src || img.src.endsWith('/')){
        img.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)';
        img.alt='placeholder image';
      }
    });