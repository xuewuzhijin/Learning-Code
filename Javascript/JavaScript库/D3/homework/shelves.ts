import "./shelves.styl";
import data from "./shelvesData";
import * as d3 from "d3";

const margin      = { top: 20, right: 20, bottom: 20, left: 20 },
      width       = 1200,
      gridProps   = { width: 25, height: 25, space: 34.4 };

let   height      = 0,
      layerLength = [],
      gridLength  = [];

const yScale = index => {
    return d3
      .scaleLinear()
      .domain([layerLength[index], 1])
      .range([0, height - margin.top - margin.bottom - 10]);
  },
  xScale = index => {
    return d3
      .scaleLinear()
      .domain([1, gridLength[index]])
      .range([0, width - margin.left - margin.right]);
  };

/* 1. 添加 货架 */
const shelve = d3
.select("#app")
.selectAll("svg")
.data(data)
.enter()
.append("svg")
  .attr("class", "shelve");

/* 2. 添加货架说明 */
shelve
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`)
  .attr("class", "title")
.append("text")
  .text(d => d.shelve_code);

/* 3. 添加 层 */
shelve
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top + 10})`)
  .attr("class", "layer-wrap")
.each(function(d, i) {
  d3.select(this)
    .selectAll("layer")
    .data(d.data)
    .enter()
    .append("g")
      .attr("class", "layer")
    .transition()
    .duration(750)
    .delay( (d,i) => i * 200 )
      .attr("transform", (d, i) => `translate(0, ${i * gridProps.space})`);

  /* 5. 添加比例尺 */
  // 每个货架有多少层
  layerLength[i] = d.data.length;
  // 获取每层最大有多少格子
  gridLength[i] = d3.max(d.data.map(d => d.length));
})
.append("g")
  .attr("transfrom", "translate(0,0)");

/* 4. 添加 格子 */
const grid = d3.selectAll(".layer").each(function(d: any) {
  d3.select(this)
  .selectAll("grid")
  .data(d)
  .enter()
  .append("rect")
    .attr("x", (d, i) => i * gridProps.space)
    .attr("y", 0)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("class", (d: any) => {
      const value = Math.ceil((d.stock / d.capacity) * 100);
      let className = "grid";
      if (value === 0) {
      } else if (value <= 80) {
        className += " things";
      } else {
        className += " full";
      }
      return className;
    })
    .attr("width", gridProps.width)
    .attr("height", gridProps.height)
  .on("click", d => {
    console.log(d);
  });
});

/* 6. 每个货架添加比例尺 */
shelve.each(function(d, i) {
  const that = d3.select(this);
  height = gridProps.space * layerLength[i] + margin.top + margin.bottom + 10;

  // 考虑到添加 Y 轴的样子有点怪，（D3的API掌握的实在有限，就去掉了）
  // 添加 Y 轴比例尺
  // that
  // .append("g")
  //   .attr("transform", `translate(${margin.left},${margin.top + 10})`)
  // .call(
  //   d3
  //   .axisLeft(yScale(i))
  //   .ticks(layerLength[i])
  //   .tickSizeInner(0)
  //   .tickPadding(10)
  // );

  // 添加 X 轴比例尺
  that
    .attr("viewBox", `0 0 ${width} ${height}`)
  .append("g")
    .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
  .call(
    d3
      .axisBottom(xScale(i))
      .ticks(gridLength[i])
      .tickSizeInner(0)
      .tickPadding(10)
  );
});
