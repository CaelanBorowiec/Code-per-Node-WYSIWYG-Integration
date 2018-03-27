function injectCPNCSS(){
  var rules = $('textarea#edit-cpn-css').val();  // read out of the current CSS field
  rules = "<style>" + rules + "</style>"; // Add style tags
  //console.log(rules);

  $("iframe.cke_wysiwyg_frame").each(function()  // The 'cke_wysiwyg_frame' class can probably be replaced to support other editors
  {
    $head = $("iframe.cke_wysiwyg_frame").contents().find("head");
    $head.append(rules);
  });
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
