
var types = { lin: {
                incr: function(i, step) { return i + step; },
                step: function(min,max,n) { return (max-min)/n; },
                index: function(value,min,step) { return Math.floor((value-min)/step); },
                dist: function(r,min,max) { return min + (max - min) * r; },
              },
              log: {
                incr: function(i, step) { return Math.exp(Math.log(i) + Math.log(step)); },
                step: function(min,max,n) { return Math.exp((Math.log(max)-Math.log(min))/n); },
                index: function(step,min,value) { return Math.floor(Math.log((value/min)/step)); },
                dist: function(r,min,max) { return Math.exp(Math.log(min) + Math.log(max / min) * r); },
              }
            };
var plot;
var stage = 1;
function DataSeries(props) {
  props.matrixfy = function(format) {
    return matrixfy(this.dims, this.func, format);
  }
  props.points = props.matrixfy(1);
  props.zs = props.matrixfy(3);
  return props;
}


var arrayMax = function( array ){
    var max = array[0];
    for (var i in array)
      if (max < array[i])
        max = array[i];
    return max;
    //return Math.max.apply( Math, array );
};
var arrayMin = function( array ){
    var min = array[0];
    for (var i in array)
      if (min > array[i])
        min = array[i];
    return min;
    //return Math.min.apply( Math, array );
};
function array_to_rgb(array) {
  return 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
}
function edges(data,type,n,min,max) {
  //var edges_ = [];
  if (min == undefined) min = arrayMin(data);
  if (max == undefined) max = arrayMax(data);
  if (min == max) max += 1;
  var step = types[type].step(min,max,n);
  //console.log(min,max,step);
  //for (var i = min; i < max; i = types[type].incr(i, step))
  //  edges_.push(i);
  return sortedindexify({ type: type, min: min, max: max, n: n, step: step }); //, edges_: edges_ };
}
function sortedindexify(o) {
  o.sortedindex = function(value) { return sortedindex(this, value); };
  return o;
}
function sortedindex(edges_, value) {
  var sortedindex = types[edges_.type].index(value, edges_.min, edges_.step);
  // If data falls off the top or bottom of the scale (i.e., if value is infinite)
  if (sortedindex >= edges_.n) return 1 * edges_.n;
  if (isNaN(sortedindex) || sortedindex < 0) return 0;
  return sortedindex;
}
function searchsorted(array, value, dir, at) {
  if (dir != 'right') dir = 'left';
  //console.log('i v c !at');
  
  for (var i = 0, compare; i < array.length; i ++) {
    compare = (!at && at !== 0) ? array[i] : array[i][at];
    //console.log(i, value, compare, !at && at !== 0);
    
    if (dir == 'left') {
      if (value <= compare)
        break;
    }
    else {
      if (value < compare)
        break;
    }
  }
  //console.log('value:', value,', compare:',compare.toFixed(3),', i:',i);
  return i;
}
function scale_min_floor(array, scalar) {
  for (var i in array) {
    array[i] = Math.floor(scalar * Math.min(1, array[i]));
  }
  return array;
}




function Matrix(m) {
  m.cols = m[0].length;
  m.rows = m.length;
  m.autodims = { xmin: 0, xmax: m.cols, dx: 1, ymin: -1, ymax: m.rows - 1, dy: 1 };
  m.at = function(x, y) { return m[m.rows-y-1][x]; };
  m.matrixfy = function(format) { return matrixfy(m.autodims, m.at, format); };
  return m;
}
function matrixfy(d, func, format) {
  var matrix = [];
  for (var y = d.ymax; y > d.ymin; y -= d.dy) {
    var row = [];
    for (var x = d.xmin; x < d.xmax; x += d.dx) {
      switch (format) {
        case 1: row.push([x, y, func(x,y)]); break;
        case 2:
        case 3: row.push(func(x,y)); break;
      }
    }
    switch (format) {
      case 1:
      case 3: matrix.push.apply(matrix, row); break;
      case 2: matrix.push(row); break;
    }
  }
  return matrix;
}



function renderData(data) {
  var series = [];
  var options = { title: data[0].desc, series: [], axes: { xaxis: { tickOptions: { formatString: '%.2f' } }, yaxis: { tickOptions: { formatString: '%.2f' } } }, cursor: { show: true, zoom: true, showTooltipDataPosition: true, showVerticalLine: true, showHorizontalLine: true, tooltipFormatString:  '%s (%s, %s, %s)' } };
  
  for (index in data) {
//    data[index].points = matrixfy(
    var s_ = data[index].points;
    var n  = data[index].edges;
    var edges_ = edges(data[index].zs,data[index].axis,n);
    data[index].edges_ = edges_;
    var palette = palettes[data[index].palette](n+1);
    data[index].palette_ = palette;
    //$('#funcs').val(data[index].name);
    $('#palettes').val(data[index].palette);
    $('#numedges').val(data[index].edges);
    var resguess = Math.pow(2, Math.log((data[index].dims.xmax - data[index].dims.xmin) / data[index].dims.dx) / Math.log(2));
    $('#res').val(resguess);
    //console.log(edges_.edges_);
    console.log(palette.array.length);
    
    for (var i in s_) {
      //This is slow:
      //var sortedindex1 = searchsorted(edges_.edges_, data[index].zs[i]);
      var sortedindex2 = edges_.sortedindex(data[index].zs[i]);
      //To compare if we compute the same sortedindex using each method:
      //console.log(data[index].zs[i], sortedindex2);
      s_[i][2] = data[index].zs[i];
      s_[i][3] = { color: palette.str[sortedindex2] };
      s_[i][4] = palette.array[sortedindex2];
    }
    series.push(s_);
    //options.axes = { xaxis: { renderer: $.jqplot.LogAxisRenderer, tickDistribution: 'power', tickOptions: { formatString: '%.0e' } } , yaxis: { renderer: $.jqplot.LogAxisRenderer, tickDistribution: 'power', tickOptions: { formatString: '%.0e' } }};
    options.series.push({ renderer: $.jqplot.pcolorRenderer, rendererOptions: { dims: data[index].dims, autoscaleBubbles: false, /*bodyWidth: 1, wickColor: 'red', openColor: 'yellow', closeColor: 'blue'*/ } });
    renderColorbar('colorbar', palette, edges_, 13);
  }
  console.log(series);
  //console.log(options);
  console.log('stg',stage);
  if (stage == 1) {
    plot = $.jqplot('chart1', series, options);
    stage = 2;
  }
  else {
    for (i in series)
     plot.series[i].data = series[i];
    plot.options = options;
    plot.replot();
  }
  //plot = $.jqplot('chart1', [[1,1]], {});
  return series;

}
function colorbar(canvasid, palette) {
  var cvs = document.getElementById(canvasid);
  var ctx = getContext(canvasid);
  cvs.height = palette.array.length;
  
  var imgd = ctx.createImageData(1, palette.array.length);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
    var rgba = palette.array[palette.array.length - 1 - i/4];
    pix[i] = rgba[0];
    pix[i+1] = rgba[1];
    pix[i+2] = rgba[2];
    pix[i+3] = 255;
  }
  ctx.putImageData(imgd, 0, 0);
  return imgd;
}
function renderColorbar(canvasid, palette, edges, nlabels) {
  var imgd = colorbar('invis2', palette);
  img2 = canvas2img('invis2');

  var cvs = document.getElementById(canvasid);
  var ctx = getContext(canvasid);
  img2.onload = function() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.drawImage(this, 0, 0, 1, palette.array.length, 48, 11.5, cvs.width, cvs.height - 23);
  
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'right';
      ctx.strokeStyle = '#666';
      ctx.fillStyle = '#666';
      ctx.beginPath();
      for (var i = 0; i <= nlabels - 1; i ++) {
        var r = i / (nlabels - 1);
        var val = types[edges.type].dist(r, edges.min, edges.max);
        var h = types.lin.dist(1 - r, 12, cvs.height - 12);
        ctx.fillText(val.toPrecision(3), 40, h + 1);
        ctx.moveTo(48, h + .5);
        ctx.lineTo(44, h + .5);
      }
      ctx.stroke();
  };
}
function test(canvasid, series) {
  var dims = series.dims;
  var w = Math.ceil((dims.xmax-dims.xmin)/dims.dx), h = Math.ceil((dims.ymax-dims.ymin)/dims.dy);
  var cvs = document.getElementById(canvasid);
  cvs.width = w; cvs.height = h;
  
  //var ctx = plot.grid._ctx;
  var ctx = getContext(canvasid);

  if (!series.points) series.points = series._plotData;

  var imgd = ctx.createImageData(w,h);
  var pix = imgd.data;
  for (var i = 0; n = pix.length, i < n; i += 4) {
  a=[i,n,w,h,dims];
    var rgba = series.points[i/4][4];
    pix[i] = rgba[0];
    pix[i+1] = rgba[1];
    pix[i+2] = rgba[2];
    pix[i+3] = 255;
  }
  x=imgd;
  ctx.putImageData(imgd, 0, 0);
  return imgd;
}
function getContext(id) {
  var elem = document.getElementById(id);
  if (!elem || !elem.getContext) {
    return;
  }

  // Get the canvas 2d context.
  var context = elem.getContext('2d');
  if (!context) {
    return;
  }
  return context;
}
function canvas2img(canvasid) {
  var cvs = document.getElementById(canvasid);
  var img = new Image();
  img.src = cvs.toDataURL('image/png');
  return img;
}