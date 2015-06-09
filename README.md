nspangler:autoreconnect
=========================

AutoReconnect is a simple Meteor package for reconnecting a client to the server. Primary useful for Meteor-Cordova / Web apps that may experience some offline behavior.

## Add the Package

```bash
$ meteor add nspangler:autoreconnect
```

## Usage

On the client, simply call the function below within the `Meteor.startup` function.

```js
Meteor.startup(function () {
    // Reconnect Function
    reconnectToServer(1000, true);
  });
```

The first parameter passed to the reconnect function is the frequency, in milliseconds, that the client attempts to reconnect. The second parameter is either `true` or `false` depending on whether a "verbose" output is desired.
In the above example, the client will attempt to reconnect every second and all output from the reconnect sequence will be logged on the client.

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
