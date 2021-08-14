const { createElement } = React;
const arc = d3.arc();

const render = ReactDOM.render;
const html = htm.bind(createElement);

const width = 800;
const height = 400;
const halfHeight = height / 2;
const strokeWidth = 20;

const eyeX = 100;
const eyeHeight = -80;
const eyeSize = 30;
const eyeColor = "black";

function mouthArc() {
  return arc({
    innerRadius: 80,
    outerRadius: 100,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 1.5
  });
}

function Smiley() {

  return html`
       <svg width=${width} height=${height}>
       <g transform=translate(${width/2},${height /2})>
         <circle
            r=${halfHeight - strokeWidth}
            fill="yellow"
            stroke="black"
            stroke-width="10"
         />
         <circle cx=${eyeX - 200} cy=${eyeHeight} r=${eyeSize} fill=${eyeColor} />
         <circle cx=${eyeX} cy=${eyeHeight} r=${eyeSize} fill=${eyeColor} />
         <path d=${mouthArc()}/>
         </g>
       </svg>
     `;
}

render(html`<${Smiley}/>`, document.getElementById("root"));