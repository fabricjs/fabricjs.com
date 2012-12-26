var canvas = new this.fabric.Canvas('c');
var imageUrl = '../assets/dragon.jpg';
fabric.Image.fromURL(imageUrl, function (img) {
    img.set({
        left: img.width / 2,
        top: img.height / 2,
        lockUniScaling: true,
        hasRotatingPoint: true,
        useSideAsScalingOrigin: true
    });
    img.scaleToWidth(800, fabric.ScaleOrigin.TopLeft);
    img.scaleToWidth(600, fabric.ScaleOrigin.BottomRight);
    console.log("Width: " + img.width + ", Height: " + img.height + ", Left: " + img.left);
    canvas.add(img);
});