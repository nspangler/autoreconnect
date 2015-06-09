// Write your package code here!

var intervalId = null;

reconnectToServer = function (timeOut, verbose) {

    // Continual Reconnect Sequence
    if (verbose) {
        console.log("Initialized Reconnect Sequence");
    }

    Tracker.autorun( function () {
        // Start Pinging For Reconnect On Interval, only if status is failing and intervalId is null
        if (intervalId === null) {
            if(Meteor.status().status === "waiting" || Meteor.status().status === "failed") {
                intervalId = Meteor.setInterval( function () {
                    // Verbose Log Output
                    if (verbose) {
                        console.log("Client Status: " + Meteor.status().status);
                    }

                    // Attempt To Reconnect Over Specified TimeOut
                    Meteor.reconnect();

                    if (verbose) {
                        console.log("Client Status: " + Meteor.status().status);
                    }
                }, timeOut);
            }

        }
        // Stop Trying to Reconnect If Connected, and clear Interval
        else if(intervalId != null) {
            if(Meteor.status().status === "connected") {
                if (verbose) {
                    console.log("Client Status: " + Meteor.status().status);
                }
                // Clear Interval and Reset Interval Id
                Meteor.clearInterval(intervalId);
                intervalId = null;
            }
        }

    });

};