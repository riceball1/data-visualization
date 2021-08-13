const { createElement, useState } = React;
   const render = ReactDOM.render;
   const html = htm.bind(createElement);
   
    const width = 800;
    const height = 400;
    const halfHeight = height / 2;

   function Smiley() {
     
     return html`
       <svg width=${width} height=${height}>
         <circle
            cx=${width / 2}
            cy=${halfHeight}
            r=${halfHeight - 15}
            fill="yellow"
            stroke="black"
            stroke-width="10"
         />
       </svg>
     `;
   }
   
   render(html`<${Smiley}/>`, document.getElementById("root"));