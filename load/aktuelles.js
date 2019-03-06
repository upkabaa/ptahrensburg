var postNum = 1;
var fileDir = "aktuelles/";

function loadPosts(startNum)
{
  var div = document.createElement("div");
  div.className="news";
  $(div).load("aktuelles/post" + startNum, function( response, status, xhr ) {
  if ( status != "error" )
  {
    loadPosts(startNum + 1);
  }
});
  
  $("#newsHolder").prepend(div);
}

function initialPosts()
{
  $.ajax(
  {
    url:fileDir + "post" + postNum,
    type:'HEAD',
    error: function()
    {
        postNum++;
        initialPosts();
    },
    success: function()
    {
        postFound = true;
        loadPosts(postNum);
    }
  });
}
