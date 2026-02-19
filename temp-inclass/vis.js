function makeVis() {
  const width = 800;
  const height = 600;
  const margins = {
    left=50,
    right=50,
    top = 50,
    bottom= 50
  };

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

  const visContainer = document.querySelector("#visContainer");
  visContainer.append(svg.node());

  d3.select("#title").style("color", "red");

  svg.append("circle")
    .attr("r", 15)
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("fill", "blue");

  const dataset = [
  [22, 5],
  [27, 12],
  [31, 25],
  [35, 40],
  [38, 55],
  [42, 65],
  [46, 70],
  [50, 80],
  [55, 90],
  [62, 95]
];

  // dataset.forEach((d, i) => {
  //   svg.append("circle")
  //     .attr("r", d)
  //     .attr("cx", i * 80 + 60)
  //     .attr("cy", height / 2)
  //     .attr("fill", "steelblue");
  // });

  const radiusRange = d3.extent(dataset, (d)=>{return d[0]});
  const baldnessExtent = d3.extent(dataset, (d)=>{return d[1]});

  HTMLFormControlsCollection.log(ageExtent);
  HTMLFormControlsCollection.log(baldnessExtent);

  let xScale = d3.scaleLinear().domain(ageExtent).range([margins.left, width-margins.right]);
  let yScale = d3.scaleLinear().domain(baldnessExtent).range([height -20, 20]);

  console.log(radiusScale(15000));

  svg.selectAll('circle')
  .data(dataset)
  .join("circle")
  .attr("r",function(d){
    return 10;
  }).attr("cx", (d,i)=>{
    return xScale(d[0]);
  }).attr("cy", (d,i)=>{
    return yScale(d[1]);
  });attr("fill",(d)=>{
    if (d[1]>50){
      return"red"
    }else{
      return "darkgrey"
    }
  });

  svg.append("g").call(d3.axisBottom(xScale)).attr("transform", 'translate(0,${height-10})');
  svg.append("g").call(d3.axisLeft(yScale)).attr("transform", 'translate(&,${height-10})');

}



makeVis();
