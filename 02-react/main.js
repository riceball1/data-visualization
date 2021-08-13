const { createElement, useState } = React;
   const render = ReactDOM.render;
   const html = htm.bind(createElement);
   
   function ClickCounter() {
     const [count, setCount] = useState(0);
     
     return html`
       <div>
         <button onClick=${() => setCount(count + 1)}>
           Clicked ${count} times
         </button>
       </div>
     `;
   }
   
   render(html`<${ClickCounter}/>`, document.getElementById("root"));