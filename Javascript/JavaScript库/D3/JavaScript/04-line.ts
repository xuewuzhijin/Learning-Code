import "../css/line.styl";
import * as d3 from "d3";

const margin  = { top: 20, right: 20, bottom: 20, left: 20 },
      width   = 500 - margin.left - margin.right,
      height  = 500 - margin.top - margin.bottom,
      dataset = [
        {y: 115.89242908312738}, {y: 60.43395966803058},
        {y: 87.14523104506478}, {y: 66.63068927930414},
        {y: 42.42917892598266}, {y: 114.13423234639482},
        {y: 67.98874497817218}, {y: 32.444038222246135},
        {y: 97.00426132123933}, {y: 52.43674682216962},
        {y: 67.81505969592993}, {y: 106.58488936671172},
        {y: 47.60609245959253}, {y: 37.649289508204056},
        {y: 67.02277276185444}, {y: 89.42379348761436},
        {y: 21.73372987939664}, {y: 43.21633764785365},
        {y: 35.7660375937277}, {y: 112.59256116240333}],
      pointer = dataset.length,
      xScale  = d3.scaleLinear()
        .domain([0, pointer])
        .range([0, width]),
      yScale  = d3.scaleLinear()
        .domain([0, d3.max( dataset.map( d => d.y ))])
        .range([height, 0]);

const svg = d3.select("#app")
.append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "pink")
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

/* 添加 X 轴坐标 */
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height})`)
.call(d3.axisBottom(xScale))

/* 添加 Y 轴坐标 */
svg.append("g")
  .attr("class", "y axis")
.call(d3.axisLeft(yScale))

/* 添加线的路径生成器 */
const line = d3.line()
.x( (d,i) => xScale(i))
.y( (d: any) => yScale(d.y))
.curve(d3.curveLinear)


/* 添加路径 */
svg.append("path")
.datum(dataset)
  .attr("class", "line")
  .attr("d", line as any)

/* 添加点 */
svg.selectAll(".dot")
  .data(dataset)
.enter()
.append("circle")
  .attr("class", "dot")
  .attr("cx", function(d, i) { return xScale(i) })
  .attr("cy", function(d) { return yScale(d.y) })
  .attr("r", 5)
.on("mouseover", function(d, i, o) { 
  console.log(d, i, o) 
})
.on("mouseout", function(d, i, o) {
  console.log(d, i, o) 
})