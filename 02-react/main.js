const { createElement, useState } = React;
   const render = ReactDOM.render;
   const html = htm.bind(createElement);
   
    const width = 800;
    const height = 400;
    const halfHeight = height / 2;
    const strokeWidth = 20;

    const eyeX = 300;
    const eyeY = 200;

   function Smiley() {
     
     return html`
       <svg width=${width} height=${height}>
         <circle
            cx=${width / 2}
            cy=${halfHeight}
            r=${halfHeight - strokeWidth}
            fill="yellow"
            stroke="black"
            stroke-width="10"
         />
         <circle cx=${eyeX} cy=${eyeY} r="50" fill="black" />
         <circle cx=${eyeX + 200} cy=${eyeY} r="50" fill="black" />
       </svg>
     `;
   }
   
   render(html`<${Smiley}/>`, document.getElementById("root"));