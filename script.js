// Sort alphabetically 

runCheck();

function runCheck() {
      document.head.insertAdjacentHTML("beforeend",'<link rel=stylesheet href="style.css">');


    let labName = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5", "Lab6", "Lab7", "Lab8", "Lab9", "Lab10", "Lab11", "Lab12", "Lab13", "Lab14", "Lab15", "Lab16", "Lab17", "Lab18", "Lab19", "Lab20", "LabCitect1", "LabCitect2", "LabCitect3", "LabDevicenet", "PROFIBUS", "Lab-DNP3", "RLSVR2012", "UK-Lab1", "UK-Lab2", "UK-Lab3", "UK-Lab4", "ZA-Lab1", "ZA-Lab2", "ZA-Lab3", "ZA-Lab4", "Lab-Old", "Lab-Old2", "Lab6-Old", "Lab-HISPEC", "LabPneumatic1", "Lab-GRANTA", "ZA-RR-LAB1", "ZA-RR-LAB2", ];

    let labAjaxCall = ["https://au.electromeet.com:4433/ping/192.168.1.18", "https://au.electromeet.com:4433/ping/192.168.1.101", "https://au.electromeet.com:4433/ping/192.168.1.103", "https://au.electromeet.com:4433/ping/192.168.1.104", "https://au.electromeet.com:4433/ping/192.168.1.105", "https://au.electromeet.com:4433/ping/192.168.1.106", "https://au.electromeet.com:4433/ping/192.168.1.107", "https://au.electromeet.com:4433/ping/192.168.1.19", "https://au.electromeet.com:4433/ping/192.168.1.109", "https://au.electromeet.com:4433/ping/192.168.1.31", "https://au.electromeet.com:4433/ping/192.168.1.111", "https://au.electromeet.com:4433/ping/192.168.1.55", "https://au.electromeet.com:4433/ping/192.168.1.113", "https://au.electromeet.com:4433/ping/192.168.1.156", "https://au.electromeet.com:4433/ping/192.168.1.162", "https://au.electromeet.com:4433/ping/192.168.1.163", "https://au.electromeet.com:4433/ping/192.168.1.117", "https://au.electromeet.com:4433/ping/192.168.1.118", "https://au.electromeet.com:4433/ping/192.168.1.119", "https://au.electromeet.com:4433/ping/192.168.1.120", "https://au.electromeet.com:4433/ping/192.168.1.16", "https://au.electromeet.com:4433/ping/192.168.1.182", "https://au.electromeet.com:4433/ping/192.168.1.171", "https://au.electromeet.com:4433/ping/192.168.1.81", "https://au.electromeet.com:4433/ping/192.168.1.4", "https://au.electromeet.com:4433/ping/192.168.1.60", "https://au.electromeet.com:4433/ping/192.168.1.56", "https://uk.electromeet.com:4433/ping/192.168.1.67", "https://uk.electromeet.com:4433/ping/192.168.1.76", "https://uk.electromeet.com:4433/ping/192.168.1.64", "https://uk.electromeet.com:4433/ping/192.168.1.66", "https://za.electromeet.com:4433/ping/20.0.0.33", "https://za.electromeet.com:4433/ping/20.0.0.32", "https://za.electromeet.com:4433/ping/20.0.0.26", "https://za.electromeet.com:4433/ping/20.0.0.25", "", "", "", "https://au.electromeet.com:4433/ping/192.168.1.173", "https://au.electromeet.com:4433/ping/192.168.4.91", "https://au.electromeet.com:4433/ping/192.168.1.61", "https://za.electromeet.com:4433/ping/20.0.0.30", "https://za.electromeet.com:4433/ping/20.0.0.31"];

    for (let i = 0; i < labAjaxCall.length; i++) {
        // XMLHttpRequest to check for current managers, and validate your email address against these
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let labPingResponse = this.responseText;

                // If the lab is not reachable
                if (labPingResponse == '{"result":false}') {
                    document.write("<div class='labRow labDown'>" + labName[i] + " is not reachable" + "</div>");
                }

                // If the lab is reachable
                else {
                    document.write("<div class='labRow labUp'>" + labName[i] + " is reachable" + "</div>");
                }

            }
        }
        ;
        xhttp.open("GET", labAjaxCall[i], true);
        xhttp.send();

    }

}
