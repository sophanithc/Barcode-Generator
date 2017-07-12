function generateBarcodeForm(amount, start, url){
  var $form = "";
  var html = "";
  var btnSubmit = '<input type="submit" class="btn btn-primary" value="Submit"/>';
  if(start == undefined){
    start = 1;
  }
  // Create form element
  $form = $(document.createElement("form"));
  $form.attr("id","formBarcode");
  $form.attr("action",url);
  for(var i=start;i<=amount;i++){
    html += '<div class="form-group box-barcode-outer"> \
              <label>Barcode #'+ i +'</label> \
              <div class="box-barcode-inner"> \
                <input type="text" class="form-control" name="bProId' + i + '" id="bProId' + i + '" placeholder="Product ID"> \
                <input type="text" class="form-control" name="bProName' + i + '" id="bProName' + i + '" placeholder="Product Name"> \
              </div> \
            </div>';
  }
  $form.append($.parseHTML(html));
  $form.append(btnSubmit);
  return $form;
}
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function convertBarcode(id, value){
  JsBarcode("#" + id, value);
}
