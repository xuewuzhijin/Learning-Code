import "./shelves.styl";
import data from "./shelvesData";
import * as d3 from "d3";

const margin = { top: 20, right: 20, bottom: 20, left: 20 },
      width  = 1200,
      height  = 200,
      gridProps = { width: 20, height: 20, space: 25 };
let   layerData = [],
      gridData = [];

/* 1. 添加 货架 */
const shelve = d3
.select("#app")
.selectAll("svg")
.data(data)
.enter()
.append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "shelve");

/* 2. 添加货架说明 */
shelve
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`)
  .attr("class", "title")
.append("text")
  .text(d => d.shelve_code)

/* 3. 添加 层 */
shelve
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top + 10 })`)
  .attr("class", "layer-wrap")
.each(function(){
  const that = d3.select(this);
  layerData = (this as any).__data__.data;
  that
  .selectAll("layer")
  .data(layerData)
  .enter()
  .append("g")
    .attr("class", "layer")
    .attr("transform", (d, i) => `translate(0, ${ i * gridProps.space})`)
})
.append("g")
  .attr("transfrom", "translate(0,0)")
.call( 
  d3
  .axisLeft(
    d3
    .scaleLinear()
    .domain([ layerData.length, 1 ])
    .range([0, height - margin.top - margin.bottom - 10])
  )
  .ticks(layerData.length)
)

/* 4. 添加 格子 */
const grid = d3
.selectAll(".layer")
.each(function(){
  const that = d3.select(this);
  gridData = (this as any).__data__;
  that
  .selectAll("grid")
  .data(gridData)
  .enter()
  .append("rect")
    .attr("x", (d, i) => i * gridProps.space)
    .attr("y", 0)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("class", (d: any) => {
      const value = Math.ceil(d.stock / d.capacity * 100);
      let className = "grid";
      if (value === 0) {
      } else if (value <= 80) {
        className += " things";
      } else {
        className += " full";
      }
      return className
    })
    .attr("width", gridProps.width)
    .attr("height", gridProps.height)
    .on("click", d => {
      console.log(d);
    })
})

/* 这里有点问题，怎么把下面的 bar 放到最下面一层，并且只遍历一次 */
// .append("g")
//   .attr("transform", "translate(0, 100%)")
// .call(
//   d3
//   .axisBottom(
//     d3
//     .scaleLinear()
//     .domain([ 1, gridData.length ])
//     .range([ 0, width - margin.left - margin.right ])
//   )
// )
