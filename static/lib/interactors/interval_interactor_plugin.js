
// Requires reflectivity_sim.js

(function($) { 
    function toArray(obj) {
        return Array.prototype.slice.call(obj);
    };
    
    var dist = $.jqplot.dist;
    function bind(scope, fn) {
        return function() {
            return fn.apply(scope, toArray(arguments));
        };
    };
    
    
    $.jqplot.IntervalInteractorPlugin = function() {};
    $.jqplot.IntervalInteractorPlugin.prototype = new $.jqplot.InteractorPlugin();
    $.jqplot.IntervalInteractorPlugin.prototype.constructor = $.jqplot.IntervalInteractorPlugin;
    $.jqplot.InteractorPluginSubtypes.Interval = $.jqplot.IntervalInteractorPlugin;
    
    $.jqplot.IntervalInteractorPlugin.prototype.init = function(options) {
        $.jqplot.InteractorPlugin.prototype.init.call(this, options);
       
        this.width1 = 4;
        this.x01 = 0.0;
        this.width2 = 4;
        this.x02 = 0.0;
        this.y = 5;
        this.color1 = "Violet"
        this.color2 = "Orchid"
        $.extend(this, options);
        
        // vertical line 1
        this.p1 = new $.jqplot.PluginPoint();
        this.p1.initialize(this, this.x01, 0);
        this.p1.color1 = this.color1;
        this.p1.color2 = this.color2;
        this.vline1 = new $.jqplot.VerticalLine();
        this.vline1.initialize(this, this.p1, this.width1);
        this.vline1.color1 = this.color1;
        this.vline1.color2 = this.color2;
        this.grobs.push(this.vline1);
        this.grobs.push(this.p1);
        function render_centeredy(ctx) {
            var height = ctx.canvas.height;
            var width = ctx.canvas.width;
            ctx.fillStyle = this.color;
            ctx.strokeStyle = 'transparent';
            ctx.beginPath();
            this.putCoords(null, true);
            this.pos.y = height/2.0;
            this.getCoords();
            ctx.fillText(this.coords.x.toPrecision(4) , this.pos.x + 5, this.pos.y - 5);
            ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
            ctx.fill(); 
        }
        this.p1.render = render_centeredy
        
        this.p1.move = function(dpos) {
            this.translateBy(dpos);
            this.parent.redraw();
        }
         
        // vertical line 2
        this.p2 = new $.jqplot.PluginPoint();
        this.p2.initialize(this, this.x02, 0);
        this.p2.color1 = this.color1;
        this.p2.color2 = this.color2;
        this.vline2 = new $.jqplot.VerticalLine();
        this.vline2.initialize(this, this.p2, this.width2);
        this.vline2.color1 = this.color1;
        this.vline2.color2 = this.color2;
        this.grobs.push(this.vline2);
        this.grobs.push(this.p2);
        this.p2.render = render_centeredy
        this.p2.move = function(dpos) {
            //this.dpos.y = 0;
            this.translateBy(dpos);
            this.parent.redraw();
            //this.parent.translateBy(dpos);
            //this.parent.update();
        }
        
        this.rect = new $.jqplot.Segment(); this.rect.initialize(this, this.p1, this.p2);
        this.rect.color1 = this.color1;
        this.rect.color2 = this.color2;
        //this.rect = new $.jqplot.Rectangle(); this.rect.initialize(this, this.p1, this.p3, this.p2, this.p4); // Rectangle assumes that the second and fourth
                                                                                                              // arguments are diagonal (in this case they aren't)
                                                                                                              // so we have to make them appear that they are.
        this.rect.connectortranslatable = false;
        
        this.rect.render = function(ctx) {
            var height = ctx.canvas.height;
            var width = ctx.canvas.width;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.p1.pos.x, 0);
            ctx.lineTo(this.p1.pos.x, height);
            ctx.lineTo(this.p2.pos.x, height);
            ctx.lineTo(this.p2.pos.x, 0);
            ctx.lineTo(this.p1.pos.x, 0);
            ctx.closePath();
            ctx.globalAlpha = 0.2;
            ctx.stroke();
            //ctx.globalAlpha = 0.6;
            ctx.fill();
            ctx.globalAlpha = 0.6;
        }
        
        this.grobs.push(this.rect);
        
    }           
})(jQuery);






