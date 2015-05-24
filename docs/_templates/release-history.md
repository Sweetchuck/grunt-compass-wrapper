{% 
  var rh = '';
  for (var rhVersion in releaseHistory) {
    if (releaseHistory.hasOwnProperty(rhVersion)) {
      rh += '* **' + rhVersion + ' ' + releaseHistory[rhVersion].date + "**\n";
      rh +='  * ' + releaseHistory[rhVersion].changes.join("\n  * ") + "\n";
    }
  }
%}{%= rh %}
