var mouse = { x: 0, y: 0 }; //Cursor position
var pos = { x: 0, y: 0 }; //Cursor position
var ratio = 0.13; //delay follow cursor
var active = false;
var ball = document.getElementById("ball");

TweenLite.set(ball, { xPercent: -50, yPercent: -50 }); //scale from middle ball

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

TweenLite.ticker.addEventListener("tick", updatePosition);

function updatePosition() {
	if (!active) {
		pos.x += (mouse.x - pos.x) * ratio;
		pos.y += (mouse.y - pos.y) * ratio;

		TweenLite.set(ball, { x: pos.x, y: pos.y });
	}
}



$(".contact-area").mouseenter(function(e) {
	TweenMax.to(this, 0.3, { scale: 2 }); //scale trigger element
	TweenMax.to(ball, 0.3, { scale: 4 }); //scale ball
	active = true;
});

$(".contact-area").mouseleave(function(e) {
	TweenMax.to(this, 0.3, { scale: 1 });
	TweenMax.to(ball, 0.3, { scale: 1 });
	TweenMax.to(this.querySelector(".text-hover"), 0.3, { x: 0, y: 0 });
	active = false;
});

$(".contact-area").mousemove(function(e) {
	parallaxCursor(e, this, 1); //magnetic ball = low number is more attractive
	callParallax(e, this);
});

function callParallax(e, parent) {
	parallaxIt(e, parent, parent.querySelector(".text-hover"), 25); //magnetic area = higher number is more attractive
}

function parallaxIt(e, parent, target, movement) {
	var boundingRect = parent.getBoundingClientRect();
	var relX = e.pageX - boundingRect.left;
	var relY = e.pageY - boundingRect.top;

	TweenMax.to(target, 0.3, {
		x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
		y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
		ease: Power2.easeOut
	});
}

function parallaxCursor(e, parent, movement) {
	var rect = parent.getBoundingClientRect();
	var relX = e.pageX - rect.left;
	var relY = e.pageY - rect.top;
	pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
	pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
	TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
}