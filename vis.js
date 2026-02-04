// SVG Visualization: Bar Chart for Weekly software usage, unit as hours

const svg = document.getElementById("viz");
const svgNS = "http://www.w3.org/2000/svg";

// data
const tools = ["Illustrator", "Photoshop", "VS Code", "Figma", "After Effects"];
const hours = [6, 4, 8, 5, 3];

const maxHour = Math.max(6, 4, 8, 5, 2);

// chart layout

const chartHeight = 250;
const barWidth = 80;
const gap = 30;
const startX = 80;
const baseY = 300;


// y axis
const axis = document.createElementNS(svgNS, "line");

axis.setAttribute("x1", startX - 30);
axis.setAttribute("y1", baseY - chartHeight);
axis.setAttribute("x2", startX - 30);
axis.setAttribute("y2", baseY);
axis.setAttribute("stroke", "black");


// loop for the 5 bars
for (let i = 0; i < hours.length; i++) {

  const barHeight = (hours[i] / maxHour) * chartHeight;
  const x = startX + i * (barWidth + gap);
  const y = baseY - barHeight;


  // draw each bar
  const rect = document.createElementNS(svgNS, "rect");

  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", barWidth);
  rect.setAttribute("height", barHeight);
  rect.setAttribute("fill", "#c1a691");

  svg.appendChild(rect);

  // label each tool name
  const label = document.createElementNS(svgNS, "text");

  label.setAttribute("x", x + barWidth / 2);
  label.setAttribute("y", baseY + 20);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("font-size", "12");
  label.textContent = tools[i];

  svg.appendChild(label);

  // set the value
  const value = document.createElementNS(svgNS, "text");

  value.setAttribute("x", x + barWidth / 2);
  value.setAttribute("y", y - 8);
  value.setAttribute("text-anchor", "middle");
  value.setAttribute("font-size", "12");
  value.textContent = hours[i] + "h";

  svg.appendChild(value);

}

//SVG Art


const art = document.getElementById("art");

for (let i = 0; i < 60; i++) {

  const cx = Math.random() * 800;
  const cy = Math.random() * 400;
  const r = Math.random() * 20 + 5;

  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "#c1a691");

  art.appendChild(circle);

}