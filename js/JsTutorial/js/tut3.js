let one =document.getElementById('one');
 let h1 = document.createElement('hi');
let hitext= document.createTextNode('Here');
h1.appendChild(hitext)
one.appendChild(h1)
let text = document.createElement('text');
text.id='txtA'
text.setAttribute('style', 'border:2px solid grey; width: 400px; height:200px; margin:40px; padding:25px;')
text.setAttribute('contentEditable','true')
one.appendChild(text)


