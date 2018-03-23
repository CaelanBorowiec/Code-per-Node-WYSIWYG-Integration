function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status==200;
}

function getCurrentNodeId() {
  var $body = $('body.page-node');
  if ( ! $body.length )
    return false;
  var bodyClasses = $body.attr('class').split(/\s+/);
  for ( i in bodyClasses ) {
    var c = bodyClasses[i];
    if ( c.length > 10 && c.substring(0, 10) === "page-node-" )
      return parseInt(c.substring(10), 10);
  }
  return false;
}

function injectCPNCSS(){
  $.get("/sites/default/files/cpn/"+getCurrentNodeId()+".css").done(function()
  {
      $("iframe.cke_wysiwyg_frame").each(function()
      {
        $head = $( this ).contents().find("head");
        $head.append('<link rel="stylesheet" href="/sites/default/files/cpn/'+getCurrentNodeId()+'.css" type="text/css" />');
      });
  }).fail(function()
  {
      return;
  })
};

$(document).ready(function() {
  setTimeout(function() {injectCPNCSS();}, 1000);

  $( "a.ckeditor_links" ).click(function() {
      setTimeout(function() {injectCPNCSS();}, 500);
  });

  $("select.form-select.ckeditor-processed").change(function(){
    setTimeout(function() {injectCPNCSS();}, 700);
  });
});
