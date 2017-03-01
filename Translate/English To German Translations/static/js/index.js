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
  msg = $('#inputtext').val();
  if ($.trim(msg) == '') {
    return false;
  }
  msg1 = "Me: ..... " + msg;
  $('<div class="message message-personal" style="color:green; text-align:right;">' + msg1 + '</div>').appendTo($('.mCSB_container')).addClass('new');
  //setDate();
  $('#inputtext').val(null);
	updateScrollbar();
	interact(msg);
  setTimeout(function() {
    //fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}



$('#translate').click(function() {
  insertMessage();
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
	msg1 = "GermanBot: .... "+ reply['text']
    $('<div class="message" style="color:blue; text-align:left;">' + msg1 + '</div>').appendTo($('.mCSB_container')).addClass('new1');
    //setDate();
    updateScrollbar();

		}).fail(function() {
				alert('error calling function');
				});
}