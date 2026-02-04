// ===== Shared =====
const svgNS = "http://www.w3.org/2000/svg";

function createSVG(tag) {
  return document.createElementNS(svgNS, tag);
}

// ===== 1) Bar chart in #viz =====
const vizSvg = document.getElementById("viz");

const tools = ["Illustrator", "Photoshop", "VS Code", "Figma", "After Effects"];
const hours = [6, 4, 8, 5, 3];

const maxHour = Math.max(...hours);

const chartHeight = 250;
const barWidth = 80;
const gap = 30;
const startX = 80;
const baseY = 300;

for (let i = 0; i < hours.length; i++) {

  const barHeight = (hours[i] / maxHour) * chartHeight;
  const x = startX + i * (barWidth + gap);
  const y = baseY - barHeight;

  const rect = createSVG("rect");

  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", barWidth);
  rect.setAttribute("height", barHeight);

  rect.setAttribute("fill", "#c1a691");
  vizSvg.appendChild(rect);

  const label = createSVG("text");
  label.setAttribute("x", x + barWidth / 2);
  label.setAttribute("y", baseY + 20);

  label.setAttribute("text-anchor", "middle");
  label.setAttribute("font-size", "12");

  label.textContent = tools[i];
  vizSvg.appendChild(label);

  const value = createSVG("text");
  value.setAttribute("x", x + barWidth / 2);
  value.setAttribute("y", y - 8);

  value.setAttribute("text-anchor", "middle");
  value.setAttribute("font-size", "12");

  value.textContent = hours[i] + "h";
  vizSvg.appendChild(value);
}

// A Friendly Smiling Cat image
const artSvg = document.getElementById("art");

// Cat's face
const face = createSVG("circle");
face.setAttribute("cx", 200);
face.setAttribute("cy", 200);
face.setAttribute("r", 100);
face.setAttribute("fill", "#f2c98f");
artSvg.appendChild(face);

// Ears
//left
const earLeft = createSVG("polygon");

earLeft.setAttribute(
    "points", "120,120 160,60 200,120"
);

earLeft.setAttribute(
    "fill", "#f2c98f"
);

earLeft.setAttribute(
  "transform", "rotate(-20 160 120)"
);

artSvg.appendChild(earLeft);

//right
const earRight = createSVG("polygon");

earRight.setAttribute(
    "points", "200,120 240,60 280,120"
);

earRight.setAttribute(
    "fill", "#f2c98f"
);

earRight.setAttribute(
  "transform", "rotate(20 240 120)"
);

artSvg.appendChild(earRight);

//Inner Ears
// left inner
const innerEarLeft = createSVG("polygon");

innerEarLeft.setAttribute("points", "135,120 160,80 185,120");
innerEarLeft.setAttribute("fill",  "#f3ccd7ff"); 

innerEarLeft.setAttribute("transform", "rotate(-20 160 120)");

artSvg.appendChild(innerEarLeft);

// right inner
const innerEarRight = createSVG("polygon");

innerEarRight.setAttribute("points", "215,120 240,80 265,120");
innerEarRight.setAttribute("fill",  "#f3ccd7ff");

innerEarRight.setAttribute("transform", "rotate(20 240 120)");

artSvg.appendChild(innerEarRight);

// Eyes
const eyeLeft = createSVG("circle");

eyeLeft.setAttribute("cx", 170);
eyeLeft.setAttribute("cy", 190);
eyeLeft.setAttribute("r", 10);

eyeLeft.setAttribute("fill",  "black");

artSvg.appendChild(eyeLeft);

const eyeRight = createSVG("circle");

eyeRight.setAttribute("cx", 230);
eyeRight.setAttribute("cy", 190);
eyeRight.setAttribute("r", 10);

eyeRight.setAttribute("fill",  "black");

artSvg.appendChild(eyeRight);

//pupil
// Smaller pupil inside left eye
const pupilLeft = createSVG("circle");
pupilLeft.setAttribute("cx", 175);
pupilLeft.setAttribute("cy", 190);
pupilLeft.setAttribute("r", 4);
pupilLeft.setAttribute("fill", "#f5d9e1ff");
artSvg.appendChild(pupilLeft);

// Smaller pupil inside right eye
const pupilRight = createSVG("circle");
pupilRight.setAttribute("cx", 235);
pupilRight.setAttribute("cy", 190);
pupilRight.setAttribute("r", 4);
pupilRight.setAttribute("fill", "#f5d9e1ff");
artSvg.appendChild(pupilRight);

// Nose
const nose = createSVG("circle");

nose.setAttribute("cx", 200);
nose.setAttribute("cy", 210);
nose.setAttribute("r", 5);

nose.setAttribute("fill", "#f5d9e1ff");
artSvg.appendChild(nose);

//Mouth
const mouth = createSVG("path");
mouth.setAttribute(
  "d",
  "M 160 220 Q 200 250 240 220"
);

mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#f4a3b5");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");

artSvg.appendChild(mouth);

//cheek
// left cheek
const blushLeft = createSVG("ellipse");

blushLeft.setAttribute("cx", 135);
blushLeft.setAttribute("cy", 215);
blushLeft.setAttribute("rx", 12); 
blushLeft.setAttribute("ry", 8);  

blushLeft.setAttribute("fill", "#f8b3c1ff");

artSvg.appendChild(blushLeft);

// right cheek
const blushRight = createSVG("ellipse");

blushRight.setAttribute("cx", 265);
blushRight.setAttribute("cy", 215);
blushRight.setAttribute("rx", 12);
blushRight.setAttribute("ry", 8);

blushRight.setAttribute("fill", "#f8b3c1ff");

artSvg.appendChild(blushRight);

