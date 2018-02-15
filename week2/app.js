const http = new XMLHttpRequest ();

http.open ('GET', 'https://api.lyrics.ovh/v1/shakira/waka-waka');
http.send ();

http.onload = () => console.log (http.responseText);
