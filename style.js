const Default_Size=16;
let n;
const input=document.querySelector('input');
input.addEventListener('input',()=>{
     n=input.value;
     const body=document.querySelector('.body');
     body.innerHTML=null;
     createGrid(n);
     updateText(n);
});

const rst=document.querySelector('button');
const show=document.querySelector('.show');
const hide=document.querySelector('.hide');
const eraser=document.querySelector('#eraser');

function createGrid(size){
     let rowHeight=500/size;
     let colHeight=rowHeight;
     let colWidth=colHeight;
     const body=document.querySelector('.body');
     for(let i=0;i<n;i++){
          const  grid1 = document.createElement('div'); 
          grid1.className="row";
          grid1.style.height=`${rowHeight}px`;
          grid1.setAttribute('width','500px');
          body.appendChild(grid1);
          for(let j=0;j<n;j++){
               const grid2=document.createElement('div');
               grid2.className='col';
               grid2.style.height= `${colHeight}px`;
               grid2.style.width= ` ${colWidth}px` ;
               grid1.appendChild(grid2);
               const hover=document.querySelector('.hover');
               hover.addEventListener('click',()=>{
                    grid2.addEventListener('mouseover',()=>{
                         let ran=(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
                         grid2.style.backgroundColor="#"+ran;
                    });
               });
               const click=document.querySelector('.click');
               click.addEventListener('click',()=>{
                    grid2.addEventListener('mousedown',()=>{
                         let ran=(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
                         grid2.style.backgroundColor="#"+ran;
                    });
               });
               show.addEventListener('click',()=>{
                    grid2.style.border='1px solid black';
               });
               hide.addEventListener('click',()=>{
                    grid2.style.border=0;
               });
               rst.addEventListener('click',()=>{
                    grid2.style.backgroundColor='transparent';
               });
               eraser.addEventListener('click',()=>{
                    grid2.addEventListener('mouseover',()=>{
                         grid2.style.backgroundColor='transparent';
                    });
               });
          }
     }
}

function updateText(size){
     const sldtxt=document.querySelector('.sldtxt');
     sldtxt.textContent=`${size} x ${size}`;
}

