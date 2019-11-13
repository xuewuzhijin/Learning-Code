import "../css/force-direction.styl";
import * as d3 from "d3";

interface Nodes {
  name: string
  index?: number
  x?: number
  y?: number
  vx?: number
  vy?: number
}
interface Edges {
  source: Nodes | number
  target: Nodes | number
  index?: number
  relations?: string
}

const margin  = { top: 20, right: 20, bottom: 20, left: 20 },
width         = 800,
height        = 500,
circleProps    = { radius: 15 },
nodes: Nodes[] = [
  { name: "Language" },{ name: "Chinese Simplified" },{ name: "Chinese Traditional" },
  { name: "English" },{ name: "Japanese" },{ name: "Kannada" },
  { name: "Polish" },{ name: "Romanian" },{ name: "Greek" },
  { name: "Danish" },{ name: "Czech" },{ name: "German" },
  { name: "French" }
],
edges: Edges[] = [
  { source: 0, target: 1, relations: "中国" },{ source: 0, target: 2, relations: "台湾" },{ source: 0, target: 3, relations: "美国" },
  { source: 0, target: 4, relations: "日本" },{ source: 0, target: 5, relations: "加拿大" },{ source: 0, target: 6, relations: "波兰" },
  { source: 0, target: 7, relations: "罗马尼亚" },{ source: 0, target: 8, relations: "希腊" },{ source: 0, target: 9, relations: "丹麦" },
  { source: 0, target: 10, relations: "捷克" },{ source: 0, target: 11, relations: "德国" },{ source: 0, target: 12, relations: "法国" }
],

/* 1. 初始化 */ 
svg     = d3.select("#app").append("svg").attr("width", width).attr("height", height),
g       = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`),
colors  = d3.scaleOrdinal([ "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4" ]),

/* 2. 创建一个仿真的力学模型 */
force   = d3.forceSimulation(nodes)
  // distance 表示子节点与父节点间的距离，默认 30
  .force("link", d3.forceLink(edges).distance( 100 ).strength(1))

  // 如果指定 strength 若强度为正值则表示节点之间相互吸引，负值表示节点之间相互排斥，默认 -30
  .force("charge", d3.forceManyBody()/* .strength(5) */)

  // 可以将所有的节点的中心一致的向指定的位置 ⟨x,y⟩ 移动。
  .force("center", d3.forceCenter(width / 2, height / 2))

  // forceCollide([radius]) 力模型将节点视为具有一定 radius 的圆，而不是点，并且阻止节点之间的重叠。如果没有指定 radius 则默认所有的节点半径都为 1
  // 如果指定了 strength 则将碰撞强度设置为指定的数值，强度范围为 [0, 1]
  .force("collide", d3.forceCollide(50).strength(.1));

// 到了这里，此时初始化的数据已经被转换成了力学模型所需的数据
console.log( "nodes: ",nodes, "edges: ",edges );

/* 3. 添加节点与节点之间的连接线 */
const border = g.append("g")
.selectAll("line")
.data(edges)
.enter().append("line")
  .attr("stroke",d => colors((d.target as Nodes).name))
  .attr("stroke-width",1),

/* 4. 添加节点与节点之间的关系文本 */
linksText = g.append("g")
.selectAll("text")
.data(edges)
.enter().append("text")
  .text(d => d.relations),

/* 5. 创建一个圆和文本的包裹器 */
gs = g.selectAll(".circle-text-wrap")
.data(nodes)
.enter().append("g")
  .attr("transform",d => `translate(${d.x},${d.y})`),

/* 6. 先添加圆 */
circle = gs.append("circle")
  .attr("r",circleProps.radius)
  .attr("fill", d => colors(d.name) );

/* 7. 后添加文字。因为在 svg 的规则中，后添加的标签层级最高，所以如果先添加文字后添加圆会导致文本被圆遮掩住 */
gs.append("text")
  .attr("x",-10)
  .attr("y",-20)
  .text(d => d.name)

// 关于 tick 官方介绍 https://github.com/xswei/d3-force/blob/master/README.md#simulation_tick
force.nodes(nodes).on("tick", ticked);

// 关于鼠标/触摸拖动事件 https://github.com/xswei/d3-drag/blob/master/README.md#api-reference
gs.call(
  d3.drag()
    .on("start",started)
    .on("drag",dragged)
    .on("end",ended)
);

function ticked(){
  border
    .attr("x1", d => ( d.source as Nodes ).x)
    .attr("y1", d => ( d.source as Nodes ).y)
    .attr("x2", d => ( d.target as Nodes ).x)
    .attr("y2", d => ( d.target as Nodes ).y);
    
  linksText
    .attr("x",d => ((d.source as Nodes).x+(d.target as Nodes).x)/2 )
    .attr("y",d => ((d.source as Nodes).y+(d.target as Nodes).y)/2 );
    
  gs.attr("transform",function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function started(d){
  if(!d3.event.active){
    // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
    force.alphaTarget(0.08).restart();
  }
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(d){
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
function ended(d){
  if(!d3.event.active){
    force.alphaTarget(0);
  }
  d.fx = null;
  d.fy = null;
}