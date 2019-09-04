(function() {

  chromeExtension = {

     generate: function () {

      chrome.tabs.executeScript(
        {
          file: 'performance.js'
        },
        function(result, isException) {
          if (isException) {
            
          } else {                      
            table=document.getElementById("table");
            table.rows[1].cells[1].innerHTML=result[0]["connectTime"];
            table.rows[2].cells[1].innerHTML=result[0]["requestEndTime"];
            table.rows[3].cells[1].innerHTML=result[0]["responseEndTime"];
            table.rows[4].cells[1].innerHTML=result[0]["domLoadingTime"];
            table.rows[5].cells[1].innerHTML=result[0]["domInteractiveTime"];
            table.rows[6].cells[1].innerHTML=result[0]["domContentLoadedTime"];
            table.rows[7].cells[1].innerHTML=result[0]["domCompleteTime"];
            table.rows[8].cells[1].innerHTML=result[0]["loadTime"];
          }
        }
      );
     },

     /**
      * Execute
      *
      */
     init: function () {
      chrome.tabs.executeScript(
        {
          file: 'execute.js'
        },
        function(result, isException) {
          if (result) {
            chromeExtension.generate();
          } else {
            document.write("There was an error retrieving Web Performing API Timing information");
          }
        });
     }

  }

  window.addEventListener("load", function load(event){
      window.removeEventListener("load", load, false);
      chromeExtension.init();
  },false);

})();