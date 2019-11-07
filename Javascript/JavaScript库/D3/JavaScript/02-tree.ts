import "./css/tree.styl";
import * as d3 from "d3";

// 学习该篇章须有 SVG 基础知识

const margin = { top: 20, right: 20, bottom: 20, left: 20 },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom,
  tree = d3
    .tree()
    .size([width, height])
    .separation((a, b) => (a.parent === b.parent ? 1 : 2)),
  orientations = {
    "bottom-to-top": {
      size: [width, height],
      x: function(d) {
        return d.x;
      },
      y: function(d) {
        return height - d.y;
      }
    }
  },
  svg = d3
    .select("#app")
    .selectAll("svg")
    .data(d3.entries(orientations))
    .enter()
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("./JavaScript/china.json")
  .then(data => {
    svg.each(function(orientations) {
      const cSvg = d3.select(this),
        value = orientations.value,
        // Compute the layout.
        treemap = d3.tree().size(value.size as [number, number]),
        nodes = treemap(d3.hierarchy(data)),
        links = nodes.descendants().slice(1);
        console.log(value);
        
        // Create the link lines.
      svg.selectAll(".link")
        .data(links)
        .enter()
      .append("path")
        .attr("class", "link")
        .attr("d", function(d) {
          return `M${d.x},${value.y(d)}
          C${d.x},
          ${(value.y(d) + value.y(d.parent)) / 2} ${d.parent.x},
          ${(value.y(d) + value.y(d.parent)) / 2}
          ${d.parent.x},${value.y(d.parent)}`;
      });

      // Create the node circles.
      const node = svg.selectAll(".node")
        .data(nodes.descendants())
      .enter()
        .append("g")
    node.append("circle")
        .attr("class", "node")
        .attr("r", 4.5)
        .attr("cx", value.x)
        .attr("cy", value.y);


    node.append("text")
      .text(d => ( d.data as any ).name)
      .attr("x", value.x)
      .attr("dx", 5)
      .attr("y", value.y);
    });
  })
  .catch(err => {
    console.error(err);
  });
