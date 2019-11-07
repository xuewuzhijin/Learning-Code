import "../css/pie.styl";
import * as d3 from "d3";

const margin = { top: 20, right: 20, bottom: 20, left: 20 },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom,
  radius = d3.min([width, height]) / 2,


  // 使用 d3 自带的颜色库 https://github.com/d3/d3-scale-chromatic/blob/v1.5.0/README.md#schemeDark2
  // colors = d3.scaleOrdinal(d3.schemeDark2),
  colors = d3.scaleOrdinal([ "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4" ]),


  // 获取的数据
  data = [{ name: "HTML", level: 150 },{ name: "JavaScript", level: 220 },
          { name: "TypeScript", level: 120 },{ name: "Vue", level: 137 },
          { name: "Webpack", level: 146 },{ name: "D3", level: 80 }],
  // 转换成饼形角状块数据...就这么称呼吧
  pieData = d3.pie().sort(null).value( (d: any) => d.level )(data as any);

/* 1. 创建 svg */
const svg = d3.select("#app")
.append("svg")
  .attr("width", width)
  .attr("height", height);

/* 2. 创建弧形路径 */
const arc = d3.arc()
.innerRadius(0)
.outerRadius(radius)
.padAngle(.05)
.padRadius(50);

/* 3. 创建三角形块 */
const section = svg
.append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`)
.selectAll("path")
.data(pieData)
.enter()
.append("path")
  // 填充路径
  .attr("d", arc as any)
  // 填充颜色
  .attr("fill", (d: any) => colors(d.data.level));


/* 4. 创建文本块 */
const text = d3.select("g")
.selectAll("text")
.data(pieData)
.enter()
.append("text")
.each( function(d: any) {
  // 获取当前块的中心点
  const [x,y] = arc.centroid(d),
        that = d3.select(this);
  
  // 如果要获取文字宽高，需要在动画前就把文字填充上去，否则宽高为0
  that.text(d.data.name)
    .attr("x", x - that.node().getBBox().width / 2)
    .attr("y", y);
})