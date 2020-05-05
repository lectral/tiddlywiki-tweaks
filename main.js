String.prototype.toRGB = function () {
  var hash = 0;
  if (this.length === 0) return hash;
  for (var i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function changeColor(element, color) {
  var color = "2px solid " + color;
  console.log(color)
  element.style['border-left'] = "2px solid " + color;
}

$tw.hooks.addHook("th-page-refreshed", function (list) {
  var children = $tw.pageContainer.getElementsByClassName("tc-tiddler-frame");
  for (var i = 0; i < children.length; i++) {
    var tiddlerFrameElements = children[i].getElementsByClassName("tc-title")
    if (tiddlerFrameElements.length) {
      var tiddlerTitle = tiddlerFrameElements[0].textContent;
      children[i].style['border-left'] = "2px solid " + tiddlerTitle.toRGB();
    }
  }
});