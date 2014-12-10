var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
    },

    update: function() {
        this.draw();
    },

    draw: function () {
        var canvas = $("#gameCanvas");
        var context = canvas[0].getContext('2d');
        context.fillStyle = 'red';
        context.fillRect(50, 50, 200, 200);
    },
    
    updateWithTime: function() {
        var startTime = new Date().getTime();
        this.update();
        return new Date().getTime() - startTime;
    }
});
