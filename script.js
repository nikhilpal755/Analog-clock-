setInterval(() => {
    // hr hand -->  30*h + m/2 roation 
    // min hand --> 6*m + s/10 rotation
    // sec hand --> 6*s rotation
      date = new Date();
     htime = date.getHours();
     mtime = date.getMinutes();
     stime = date.getSeconds();

     hr.style.transform = `rotate(${30*htime + mtime/2}deg)`;
     min.style.transform =`rotate(${6*mtime + stime/10}deg)`;
     sec.style.transform = `rotate(${6*stime}deg)`;

    

    
}, 1000);// 1sec

