fetch('productos.json')
.then(r=>r.json())
.then(data=>{
const c=document.getElementById('productos');
data.forEach(p=>{
const d=document.createElement('div');
d.className='card';
d.innerHTML=`
<img src="${p.imagen}" alt="${p.nombre}">
<h3>${p.nombre}</h3>
<p><strong>$${p.precio}</strong></p>
<p>${p.descripcion}</p>
<a class="btn" target="_blank"
href="https://wa.me/5299396952479?text=${encodeURIComponent('Hola GARVAL, me interesa '+p.nombre)}">Solicitar por WhatsApp</a>`;
c.appendChild(d);
});
});
