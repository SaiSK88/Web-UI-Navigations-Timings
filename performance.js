(function() {
      var y = {};

      y.redirectTime = performance.timing.redirectEnd - performance.timing.navigationStart;;
      y.domainLookUpTime = performance.timing.domainLookupEnd - performance.timing.navigationStart;;
      y.connectTime = performance.timing.connectEnd - performance.timing.navigationStart;;
      y.requestEndTime = performance.timing.responseStart - performance.timing.navigationStart;;
      y.responseEndTime = performance.timing.responseEnd - performance.timing.navigationStart;;
      y.domLoadingTime = performance.timing.domLoading - performance.timing.navigationStart;;
      y.domInteractiveTime = performance.timing.domInteractive - performance.timing.navigationStart;;
      y.domContentLoadedTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;;
      y.domCompleteTime = performance.timing.domComplete - performance.timing.navigationStart;
      y.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

      return y;

    })();