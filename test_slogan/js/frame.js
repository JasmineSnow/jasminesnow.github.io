//載入天地
function getHtmlData(fileAdds){
  var htmlData = "";
  $.ajax({
    url: fileAdds,
    async: false, //取消非同步
    success: function(data){
      htmlData = data;
    }
  });
  return htmlData;
}