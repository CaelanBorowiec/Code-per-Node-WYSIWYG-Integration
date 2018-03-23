// Return the page NID using JS
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
  //Check if CPN has saved a cached CSS file for this node.
  // Note: this assumes the default storage location.
  $.get("/sites/default/files/cpn/"+getCurrentNodeId()+".css").done(function()
  {
      $("iframe.cke_wysiwyg_frame").each(function()  // The 'cke_wysiwyg_frame' class can probably be replaced to support other editors
      {
        // Attach the stylesheet link to the editor iframe.
        $head = $( this ).contents().find("head");
        $head.append('<link rel="stylesheet" href="/sites/default/files/cpn/'+getCurrentNodeId()+'.css" type="text/css" />');
      });
  }).fail(function()
  {
      return;
  })
};

$(document).ready(function() {
  setTimeout(function() {injectCPNCSS();}, 1000);  // Wait 1 second after page load so that CKEditor can initialize.

  $( "a.ckeditor_links" ).click(function() {
      setTimeout(function() {injectCPNCSS();}, 500); // Catches switching between 'rich text' and 'plain text'
  });

  $("select.form-select.ckeditor-processed").change(function(){
    setTimeout(function() {injectCPNCSS();}, 700); // Catches switching between text formats (eg, from PHP to Full HTML)
  });
});
