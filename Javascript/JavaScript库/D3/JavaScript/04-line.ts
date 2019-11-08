import "../css/line.styl";
import * as d3 from "d3";

const margin  = { top: 20, right: 20, bottom: 30, left: 30 },
      width   = 500,
      height  = 500,

      // 下面数据由 d3.randomUniform(10, 120) 随机生成的数据
      dataset = [
        {y: 15.89242908312738}, {y: 60.43395966803058},
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

      // XY轴的比例映射
      xScale  = d3.scaleLinear()
        // 比例尺的数值范围，0 到 数据总长度（20），因从 0 开始，所以要减去1，如果需要从 1 开始，那么需要在第4/6步 （x,cx） 都加1
        .domain([0, pointer - 1])
        // 比例尺的宽度，这个宽度映射到 svg，根据总宽度等比例缩放，前提是需要减去在svg上添加g的margin值
        .range([0, width - margin.left - margin.right]),
      yScale  = d3.scaleLinear()
        // 比例尺的数值范围，当不确定数值的最大值是多少时，通过d3.max获取最大值来解决它
        .domain([0, d3.max( dataset.map( d => d.y ))])
        // 比例尺的高度
        .range([height - margin.top - margin.bottom, 0]);

/* 1. 添加 svg */
const svg = d3.select("#app")
.append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

/* 2. 添加 X 轴坐标 */
svg.append("g")
  .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
.call(d3.axisBottom(xScale).ticks(pointer))

/* 3. 添加 Y 轴坐标 */
svg.append("g")
.call(d3.axisLeft(yScale))

/* 4. 添加线的路径生成器 */
const line = d3.line()
.x( (d,i) => xScale(i))
.y( (d: any) => yScale(d.y))
// 下面表示线的折角处以什么形式展现
.curve(d3.curveLinear)
// .curve(d3.curveNatural)
// .curve(d3.curveCatmullRom)
// .curve(d3.curveCardinal)
// .curve(d3.curveBundle)
// .curve(d3.curveBasis)
// ...


/* 5. 添加路径 */
svg.append("path")
.datum(dataset)
  .attr("class", "line")
  .attr("d", line as any);

/**
 * data 与 datum 的区别
 * 相同点：都会在元素节点上创建一个__data__属性
 * 
 * data：假设 body 中有 5 个div，此时我 d3.selectAll("div").data([1,2,3,4])，
 * 那么数组中的1会绑定在第一个div上，2会绑定在第2个div上...如果div的数量大于数组的长度，那么那个div就不会有__data__属性，
 * 也就是说，当值为 undefined 或 null 时，也不会有这个属性
 * 
 * datum：假设 body 中有 5 个div，此时我 d3.selectAll("div").datum([1,2,3,4])，
 * 那么每个div都会绑定这个数组，绑定的是整个数组，而不是数组中的某一个
 * */

/* 6. 添加点 */
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