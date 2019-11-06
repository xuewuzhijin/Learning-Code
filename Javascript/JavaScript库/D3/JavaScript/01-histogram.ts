import "../css/histogram.styl";
import * as d3 from "d3";

const width = 500,
  height = 300,
  // 假数据
  data = [50, 90, 120, 160, 200],
  // 比例映射，假设固定一块区域（宽：500， 高：500），然而数据的值超过了500，总不能超过整个画布，所以利用 d3.scaleLinear 来映射
  // domain 域的大小从 0 到给定数据的最大值
  // range 代表画布从 0 到画布宽度（有边框、间隙需减去）
  linear = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width - 20]),
  // 比例尺的值，如果需要自定义比如使用数据中的值，那么添加 .tickValues，因为需要从0开始，所以concat一下
  // 如果不添加 .tickValues，那么默认从 0开始，到范围的最大值，也就是数据的最大值
  axis = d3.axisBottom(linear).ticks(data.length).tickValues(data.concat(0));

// 构建 SVG
const svg = d3
  .select("#app")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "svg-wrap");

// 构建 RECT
const rect = svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", 20)
  .attr("y", (value: number, i: number): number => i * 25)
  .attr("class", "rect-item")
  .attr("height", 20)
  // 绑定的事件需要放在transition之前,否则报错
  .on("click", (value, i) => {
    console.log(`当前点击的第${i}条柱子，该值是${value}`)
  })
  .transition()
  .duration(300)
  .delay((value, i) => i * 200)
  .attr("width", value => linear(value));

// 添加比例尺
svg
  .append("g")
  .attr("class", "axis-wrap")
  .attr("transform", "translate(20,130)")
  .call(axis);
