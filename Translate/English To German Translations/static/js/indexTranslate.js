var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    //fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  //setDate();
  $('.message-input').val(null);
  //updateScrollbar();
	interact(msg);
  setTimeout(function() {
    //fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

function insertChat() {
  //msg = $('.message-input').val();
  msg = $('#inputtext').val();
  
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal" style="color:green; text-align:right;" >' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  //setDate();
  //$('.message-input').val(null);
  $('#inputtext').val(null);
  //updateScrollbar();
	//msg = 'CH!'+msg;
	interact(msg);
  setTimeout(function() {
    //fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}


function insertTranslate() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  //setDate();
  $('.message-input').val(null);
  //updateScrollbar();
	msg = 'TR!'+msg;
	interact(msg);
  setTimeout(function() {
    //fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}


$('#translate').click(function() {
  insertTranslate();
});

$('#chat').click(function() {
  insertChat();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})



function interact(message){
	//alert(message)
	// loading message
  $('<div class="message loading new"><span></span></div>').appendTo($('.mCSB_container'));
  
	// make a POST request [ajax call]
	$.post('/message', {
		msg: message,
	}).done(function(reply) {
		// Message Received
		// 	remove loading meassage
    $('.message.loading').remove();
		// Add message to chatbox
	//$('<div class="message new">' + reply['text'] + '</div>').appendTo($('.messages-content'));
    $('<div class="message" style="color:blue; text-align:left;">' + reply['text'] + '</div>').appendTo($('.mCSB_container')).addClass('new1');
    //setDate();
    updateScrollbar();

		}).fail(function() {
				alert('error calling function');
				});
}