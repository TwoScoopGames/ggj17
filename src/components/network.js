module.exports = {
  factory: function() {
    return {
      lastPacketTime: 0,
      peerTime: 0,
      time: 0
    };
  },
  reset: function(network) {
    network.lastPacketTime = 0;
    network.peerTime = 0;
    network.time = 0;
  }
};
