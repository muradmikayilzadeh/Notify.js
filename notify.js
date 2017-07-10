
var Notify = (function(){

	function Notify(id,width,height,href){


		this.id = id;
		this.height = height;
		this.width = width;
		this.href = href;

		var url = ""+href;

		document.write('<a href='+href+' width='+width+' height='+height+' id="notify"><div id='+id+'><div class="img"><img src=""></div><a onclick="removeNotify('+id+')" class="fa fa-close" id="close"></a><div class="heading"></div><br><div class="body" id="body"></div></div></a>');

		var notify = document.getElementById(id);
		notify.style.width = width + 'px';
		notify.style.height = height + 'px';
		notify.style.position = 'fixed';
		notify.style.top = '20px';
		notify.style.left = '20px';

		console.log('Notify is Connected');

	}

	Notify.prototype.bgColor = function(id,color){

		this.id = id;
		this.color = color;

		var notify = document.getElementById(id);
		notify.style.backgroundColor = color;

	}

	Notify.prototype.fontColor = function(id, color){

		this.id = id;
		this.color = color;

		var notify = document.getElementById(id);
		notify.style.color = color;

	}

	Notify.prototype.title = function(id,text){

		this.id = id;
		this.text = text;

		var notify = document.getElementById(id);
		notify.getElementsByClassName('heading')[0].innerHTML = '<h3>'+text+'</h3>';

	}

	Notify.prototype.titleColor = function(id, color){

		this.id = id;
		this.color =color;

		var notify = document.getElementById(id);
		notify.getElementsByClassName('heading')[0].getElementsByTagName('h3')[0].style.color = color;

	}


	Notify.prototype.content = function(id,text){

		this.id = id;
		this.text = text;

		var notify = document.getElementById(id);
		notify.getElementsByClassName('body')[0].innerHTML = '<span>'+text+'</span>';	

	}

	Notify.prototype.fontFamily = function(id, name){

		this.id = id;
		this.name = name;

		var notify = document.getElementById(id);
		notify.fontFamily = name;	

	}

	Notify.prototype.image = function(id,width, height, src){

		this.id = id;
		this.width = width;
		this.height = height;
		this.src = src;

		var notify = document.getElementById(id);

		notify.getElementsByClassName('img')[0].style.width = width + 'px';
		notify.getElementsByClassName('img')[0].style.height = height + 'px';
		notify.getElementsByClassName('img')[0].getElementsByTagName("img")[0].setAttribute('src', src);

		var img = notify.getElementsByClassName('img')[0].getElementsByTagName("img")[0];
		img.style.height = height + 'px';
		img.style.width = width + 'px';

	}

	Notify.prototype.boxShadow = function(id, value){

		this.id = id;
		this.value = value;

		var notify = document.getElementById(id);
		notify.style.boxShadow = value;

	}

	Notify.prototype.setPosition = function(id, coordinates){

		this.id = id;
		this.coordinates = coordinates;

		var notify = document.getElementById(id);
		notify.style.top = coordinates[0] + 'px';
		notify.style.right = coordinates[1] + 'px';
		notify.style.bottom = coordinates[2] + 'px';
		notify.style.left = coordinates[3] + 'px';

	}

	Notify.prototype.topLeft = function(id){

		this.id = id;

		var notify = document.getElementById(id);
		notify.style.top = '10px';
		notify.style.left = '10px';
		notify.style.right = '';
		notify.style.bottom = '';

	}

	Notify.prototype.bottomLeft = function(id){

		this.id = id;

		var notify = document.getElementById(id);
		notify.style.bottom = '10px';
		notify.style.left = '10px';
		notify.style.top = '';
		notify.style.right = '';

	}

	Notify.prototype.topRight = function(id){

		this.id = id;

		var notify = document.getElementById(id);
		notify.style.top = '10px';
		notify.style.right = '10px';
		notify.style.left = '';
		notify.style.bottom = '';

	}

	Notify.prototype.bottomRight = function(id){

		this.id = id;

		var notify = document.getElementById(id);
		notify.style.bottom = '10px';
		notify.style.right = '10px';
		notify.style.top = '';
		notify.style.left = '';

	}

	Notify.prototype.addCloseButton = function(id,color,hoverColor){

		this.id = id;
		this.color = color;
		this.hoverColor = hoverColor;

		var notify = document.getElementById(id);

		var close = notify.getElementsByClassName('fa-close')[0];
		close.style.display = 'inline';
		close.style.color = color;

		notify.getElementsByClassName('fa-close')[0].onmouseover = function(){
			close.style.color = hoverColor;
		}

		notify.getElementsByClassName('fa-close')[0].onmouseleave = function(){
			close.style.color = color;
		}


	}

	Notify.prototype.removeCloseButton = function(id){

		this.id = id;

		var notify = document.getElementById(id);

		var close = notify.getElementsByClassName('fa-close')[0];
		close.style.display = 'none';

	}	

	return Notify;

})();

function removeNotify(notify){
	this.notify = notify;
	notify.style.display = 'none';
}
