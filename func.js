				// ********* Recover text from textarea *************** //				
				function allAction() {
				  var x = document.getElementById("frm1");
				  var text = "";
				  var i;
				  for (i = 0; i < x.length ;i++) {
					text += x.elements[i].value;
				  }
				  return text;
				}
				
				// ********* Sentence Case *************** //
				function sentenceCaseCore (str) {
						return str.replace(/[a-z]/i, function (letter) {
							return letter.toUpperCase();
						}).trim();
				}
				
				function sentenceCase() {
				  var recup = allAction();
				  var resupc = sentenceCaseCore(recup.toLowerCase());
				  document.forms['resultform']['resultextarea'].value = resupc;
				}				
				
				// ********* UpperCase *************** //				
				function upperCase() {
				  var recup = allAction();
				  var resupc = recup.toUpperCase();
				  document.forms['resultform']['resultextarea'].value = resupc;
				}

				// ********* LowerCase *************** //
				function lowerCase() {
				  var recup = allAction();
				  var resupc = recup.toLowerCase();
				  document.forms['resultform']['resultextarea'].value = resupc;
				}
				
				// ********* Capitalized *************** //
				function capitalizedCore(str) {
					return str.replace(
						/\w\S*/g,
						function(txt) {
							return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
						}
					);
				}

				function capitalized() {
				  var recup = allAction();
				  var resupc = capitalizedCore(recup);
				  document.forms['resultform']['resultextarea'].value = resupc;
				}				
				
				// ********* TitleCase {{ UNDER TEST }} *************** //		
				function titleCaseCore(str) {
				  return str.replace(/\w\S/g, function(t) { return t.toUpperCase() });
				}
				
				function titleCase() {
				  var recup = allAction();
				  var resupc = titleCaseCore(recup);
				  document.forms['resultform']['resultextarea'].value = resupc;
				}
				
				// ********* Clear *************** //
				function clearArea() {
				  document.forms['resultform']['resultextarea'].value = "";
				  
				}	
